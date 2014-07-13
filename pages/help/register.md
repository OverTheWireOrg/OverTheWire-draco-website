Registering an account
======================

All authentication in the warzone is based on client-side SSL certificates. This makes
the registration process slightly more complicated than the typical 'username and
password' setup.

1. Generate a private key and Certificate Signing Request (CSR). The following shell
   command will generate a key ```user.key``` and CSR ```user.csr``` in the current
   working directory.

        openssl req -new -newkey rsa:2048 -nodes -out user.csr -keyout user.key -subj "/"

2. Store your private key ```user.key``` in a safe place. **Never give your private key to anyone!**

3. Click on the "Register" button on the left of this website. In the popup form,
   fill in a username, select an [account type](/#/help/account) and select the CSR file you just
   created: ```user.csr```. Then submit the form.

4. After registering, you will be redirected to your profile page. Registering an account involves
   signing your CSR, which may take some time. You can monitor the state of the registration
   process on your profile page.

5. When your account is approved, you can go ahead and download your configuration tarball
   listed on your profile page. This configuration tarball can be combined with your private
   key using the [consume-client-credentials.sh scripts](https://github.com/StevenVanAcker/OverTheWire-draco-tools/blob/master/consume-client-credentials.sh) from the [Draco tools](https://github.com/StevenVanAcker/OverTheWire-draco-tools).

6. Now that you have the correct files, continue to [configure your browser](/#/help/configure-browser) and [configure your OpenVPN client](/#/help/configure-openvpn).

