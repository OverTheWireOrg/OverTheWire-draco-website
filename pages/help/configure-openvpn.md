Configuring the OpenVPN client
==============================

Continuing from the [browser configuration](/#/help/configure-browser), you should have a file
called ```<username>-openvpn.tar.gz```. This file holds all the configuration files for OpenVPN.
After you've installed an OpenVPN client, you can unpack this tarball in ```/etc/openvpn```
with ```tar -xf <username>-openvpn.tar.gz```.

Starting the OpenVPN client
---------------------------

The process of starting the OpenVPN client is again dependent on the particular client software.

Ensuring that it works
----------------------

Once you are connected to the warzone through OpenVPN, you should be able to ping ```172.27.0.1``` and
connect with it through a browser. This IP address is the internal address of the external website.

