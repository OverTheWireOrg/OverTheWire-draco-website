<div class="row">
<div class="col-md-4">[&#8592; Registering an account](/#/help/register)</div>
<div class="col-md-4">[&#8593; Overview](/#/help)</div>
<div class="col-md-4">[Configuring your OpenVPN client &#8594;](/#/help/configure-openvpn)</div>
</div>

Configuring the browser
=======================

Following [account registration](/#/help/register), you can now download the configuration tarball
from your profile page. This configuration tarball contains a signed certificate which, together
with your private key, can be used to authenticate yourself to the Warzone registry.

Generating the PKCS#12 file
---------------------------

To configure the browser, the private key and signed certificate have to be combined into a [PKCS#12](http://en.wikipedia.org/wiki/PKCS_12) file.
This can easily be accomplished through the ```consume-client-credentials.sh``` ([download](https://raw.githubusercontent.com/StevenVanAcker/OverTheWire-draco-tools/master/consume-client-credentials.sh)) script in the [Draco tools](https://github.com/StevenVanAcker/OverTheWire-draco-tools) repository.
This script is executed with the shown arguments:
```./consume-client-credentials.sh <tarball> <private key>```

For an example user ```johndoe```, with tarball ```johndoe.tar.gz``` and private key ```user.key``` the output would be:

	johndoe@home:~$ ./consume-client-credentials.sh johndoe.tar.gz user.key
	    [DEBUG] Your username: johndoe
	    [DEBUG] You will be prompted for a password to protect the PKCS12 file.
	    Enter Export Password:
	    Verifying - Enter Export Password:

	    Your OpenVPN credentials are in johndoe-openvpn.tar.gz
	    Your registry credentials are in johndoe-registry.p12

The file ```johndoe-registry.p12``` is the PKCS#12 file that can be loaded into your browser to
authenticate yourself to the Warzone.

Loading the PKCS#12 file into your browser
------------------------------------------

The process of actually loading the PKCS#12 file into your browser, is browser specific. Here are some links
to help you find documentation on how to do this for some popular browsers:

* [Google Chrome](https://google.com/?q=install+client+certificate+google+chrome)
* [Mozilla Firefox](https://google.com/?q=install+client+certificate+mozilla+firefox)
* [Microsoft Internet Explorer](https://google.com/?q=install+client+certificate+microsoft+internet+explorer)
* [Opera](https://google.com/?q=install+client+certificate+opera)

Ensuring that it works
----------------------

To make sure the certificate was loaded correctly, go to [](https://draco.overthewire.org).
Your browser should prompt you to select the identity with which you want to authenticate to this website.
If successfully authenticated, your username will be shown in the top-left corner. Going to
your profile will also indicate that you are viewing your own profile.

