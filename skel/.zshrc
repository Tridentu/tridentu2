
set -o shwordsplit

as_root()
{
  if   [ $EUID = 0 ];        then $*
  elif [ -x /usr/bin/sudo ]; then sudo $*
  else                            su -c \\"$*\\"
  fi
}

export  as_root


export ZSH_THEME="robbyrussell"
source zshroot/index.zsh
