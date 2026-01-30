# Begin ~/.profile
# Personal environment variables and startup programs.

if [ -d "$HOME/bin" ] ; then
  pathprepend $HOME/bin
fi

wayfire-run (){
  command=$1
  
  if [ -f "~/.config/wayfire-scripts/$command" ]; then
  	~/.config/wayfire-scripts/$command
  fi 
}

export -f wayfire-run


# Set up user specific i18n variables
#export LANG=en_US.UTF-8

# End ~/.profile
