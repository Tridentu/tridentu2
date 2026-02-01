
set -o shwordsplit

as_root()
{
  if   [ $EUID = 0 ];        then $*
  elif [ -x /usr/bin/sudo ]; then sudo $*
  else                            su -c \\"$*\\"
  fi
}

export  as_root

export PATH="$PATH:/usr/local/bin/:/usr/local/go/bin"
export PATH="$PATH:/opt/rustc/bin"
export PATH="$PATH:$HOME/Applications"
export PATH="$PATH:$HOME/.config/rofi/scripts"
export ZSH_THEME="robbyrussell"
export EDITOR=nano


zstyle ':omz:plugins:eza' 'dirs-first' yes
zstyle ':omz:plugins:eza' 'git-status' yes
zstyle ':omz:plugins:eza' 'header' yes
zstyle ':omz:plugins:eza' 'show-group' yes
zstyle ':omz:plugins:eza' 'icons' yes
zstyle ':omz:plugins:eza' 'size-prefix' binary
zstyle ':omz:plugins:eza' 'color-scale-mode' gradient
zstyle ':omz:plugins:eza' 'time-style' '+%Y-%m-%d  %I:%M %P'
zstyle ':omz:plugins:eza' 'hyperlink' yes


source zshroot/index.zsh
clear
