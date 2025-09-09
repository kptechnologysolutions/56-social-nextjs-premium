#!/usr/bin/expect -f

set timeout 120
spawn rsync -avz --delete out/ site56social@vps27305.dreamhostps.com:~/56social.com/

expect {
    "password:" {
        send "Surf22\$\$\r"
        exp_continue
    }
    "Are you sure you want to continue connecting" {
        send "yes\r"
        exp_continue
    }
    eof
}

wait