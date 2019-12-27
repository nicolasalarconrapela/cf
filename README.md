# Build Docker

cd src/AnLibraryReact/AnLibrary.React/ClientApp
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
vi /etc/ssh/sshd_config
# ClientAliveInterval 60
/etc/init.d/sshd restart

sudo iptables -A INPUT -p tcp -i eth0 --dport 3306 -j ACCEPT
https://blog.unelink.es/wiki/abrir-puerto-en-linux-ubuntu-server/
sudo iptables -A INPUT -p tcp -i eth0 --dport 22140 -j ACCEPT


## Automatic update the dependencies

    npm install -g npm-check-updates
    ncu -u --packageFile package.json
