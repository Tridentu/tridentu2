import app from "ags/gtk4/app"
import GLib from "gi://GLib"
import Gdk from "gi://Gdk?version=4.0"
import Gtk from "gi://Gtk?version=4.0"
import Adw from "gi://Adw"
import Pango from "gi://Pango"
import { Astal } from "ags/gtk4"
import { createPoll } from "ags/time"
import { createBinding, createState } from "ags"
import { For, onCleanup } from "ags"
import Battery from "gi://AstalBattery"
import Network from "gi://AstalNetwork"
import PowerProfiles from "gi://AstalPowerProfiles"
import Notifd from "gi://AstalNotifd"

import SCSS from  "./tomohawk.scss"

function THClock({}){
   const clockDate = createPoll("", 1000, function(){
      return GLib.DateTime.new_now_local().format("%A, %h %d, %Y")
   });
    const clockTime  = createPoll("", 1000, function(){
      return GLib.DateTime.new_now_local().format("%I:%M %p %Z")
   });
   return (
     <menubutton class="tomohawkClock">
	<label label={clockTime} tooltip-text={clockDate} />
	<popover>
          <Gtk.Calendar 
          show-heading
           />
	</popover>
     </menubutton>
   );   
}

function THNetwork({}){

  const net = Network.get_default()

  const ssid = createBinding(net.wifi, "ssid");
  const iconName = createBinding(net.wifi, "iconName");
  return (
    <menubutton class="tomohawkNetwork">
       <box class="tomohawkNetwork">
          <Gtk.Image icon-name={iconName} />
          <label label={ssid} />
       </box>
    </menubutton>
  )
}


function THBQS({}) {
  const battery = Battery.get_default()
  const powerprofiles = PowerProfiles.get_default()

  const setPowerProfile = (profile: string) => {
	powerprofiles.set_active_profile(profile);
  }
	
  const percentage = battery.percentage
  const message = `${Math.floor(percentage * 100)}%`
  let iconName = createBinding(battery, "batteryIconName");
  
  return (
    <menubutton class="tomohawkBQS" visible={createBinding(battery, "isPresent")} tooltip-text={message}>
      <box class="tomohawkBQS">
        <Gtk.Image icon-name={iconName} icon-size="1" />
        <label label={message} />
      </box>
      <popover>
	<box class="tomohawkPowerProfiles" orientation={Gtk.Orientation.VERTICAL}>
	   <box class="tomohawkPPHeader">
		<label label="Choose a profile:" />
	   </box>
	    { powerprofiles.get_profiles().map(({ profile }) => (
		<button class="tomohawkProfileBtn" onClicked={() => setProfile(profile)}>				
			<label label={profile} xalign={0} />
		</button>
	    ))}
	</box>
      </popover>
   </menubutton>
  )
}

function isIcon(icon?: string | null) {
    const iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default()!)
    return icon && iconTheme.has_icon(icon)
}

function fileExists(path: string) {
    return Glib.file_test(path, Glib.FileTest.EXISTS)
}

function time(time: number, format = "%I:%M %P") {
   return Glib.DateTime.new_form_unix_local(time).format(format)!
}

function urgency(n: AstalNotifd.Notification) {
    const { LOW, NORMAL, CRITICAL } = Notifd.Urgency
    switch (n.urgency) { 
	case LOW:
	   return "low"
	case CRITICAL:
	   return "critical"
	case NORMAL:
	default:
	   return "normal"
    }
}


interface NotificationProps {
    notification: Notifd.Notification
}

function Notification({ notification: n }: NotificationPros) {
    return (
	<Adw.Clamp maximumSize={400}>
	   <box 
	       widthRequest={400}
	       class={`Notification ${urgency(n)}`}
	       orientation={Gtk.Orientation.VERTICAL}
	   >
		<box class="header">
          {(n.appIcon || isIcon(n.desktopEntry)) && (
            <image
              class="app-icon"
              visible={Boolean(n.appIcon || n.desktopEntry)}
              iconName={n.appIcon || n.desktopEntry}
            />
          )}
          <label
            class="app-name"
            halign={Gtk.Align.START}
            ellipsize={Pango.EllipsizeMode.END}
            label={n.appName || "Unknown"}
          />
          <label
            class="time"
            hexpand
            halign={Gtk.Align.END}
            label={time(n.time)}
          />
          <button onClicked={() => n.dismiss()}>
            <image iconName="window-close-symbolic" />
          </button>
        </box>
        <Gtk.Separator visible />
        <box class="content">
          {n.image && fileExists(n.image) && (
            <image valign={Gtk.Align.START} class="image" file={n.image} />
          )}
          {n.image && isIcon(n.image) && (
            <box valign={Gtk.Align.START} class="icon-image">
              <image
                iconName={n.image}
                halign={Gtk.Align.CENTER}
                valign={Gtk.Align.CENTER}
              />
            </box>
          )}
          <box orientation={Gtk.Orientation.VERTICAL}>
            <label
              class="summary"
              halign={Gtk.Align.START}
              xalign={0}
              label={n.summary}
              ellipsize={Pango.EllipsizeMode.END}
            />
            {n.body && (
              <label
                class="body"
                wrap
                useMarkup
                halign={Gtk.Align.START}
                xalign={0}
                justify={Gtk.Justification.FILL}
                label={n.body}
              />
            )}
          </box>
        </box>
        {n.actions.length > 0 && (
          <box class="actions">
            {n.actions.map(({ label, id }) => (
              <button hexpand onClicked={() => n.invoke(id)}>
                <label label={label} halign={Gtk.Align.CENTER} hexpand />
              </button>
            ))}
          </box>
        )}
	   </box>
	</Adw.Clamp>
    );
}



function THMain(){
   const { TOP, LEFT, RIGHT } = Astal.WindowAnchor
   return (
     <window name="tomohawk-bar" application={app}  visible class="tomohawkBar" anchor={TOP | LEFT | RIGHT}>
           <centerbox>
           <box $type="start">

           </box>
            <box $type="end">
               <THClock />
               <THNetwork />
               <THBQS />
            </box>
           </centerbox>
        </window>
   )
}

app.start({
   instanceName: "tomohawk",
   gtkTheme: "Empty",
   main () {
     return (
     	<THMain />
     )
   },
   css: SCSS
})
