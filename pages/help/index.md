Draco warzone
=============

<div class="row">
<div class="col-md-9 warzoneMargin10px warzoneRoundCorners3px warzoneBackgroundWhite50">

## What is the warzone?
The warzone is an isolated network simulating the entire IPv4 internet, on which all connected
devices are targets to be hacked. Unlike wargames, the warzone allows players to connect
their own hackable servers or devices with any software they like, as long as it speaks IP.

To get access to the warzone, follow the steps below.
</div>
</div>

<div class="row">

<div class="col-md-3 warzoneMargin10px warzoneRoundCorners3px warzoneBackgroundWhite50">
## 1. Create an account

Click the "Register" button and follow the instructions. Account activation may
take a couple minutes.

<a data-toggle="collapse" data-target="#step1">More information...</a>

<div id="step1" class="panel-collapse collapse">
To exist on the warzone, you need an account. Setting up an account is easy and
painless.  Click on the *Register* button, select a username and register. Once
your account has been activated, you will be able to use the warzone and its
applications.

All authentication in the warzone is based on public-key cryptography, to avoid
having to store password hashes that may be leaked through a compromise later.

Upon registration, your browser creates a keypair and transmits the public key
to the registration service in SPKAC format. Once the account is activated, the
registration service presents a signed certificate (signed by the warzone CA)
to your browser. This certificate is automatically detected as belonging to the
keypair that was generated earlier and registered in your computer's secure key
vault.

None of these steps require your interaction and at no point is the private key
sent anywhere.

When your browser visits the warzone, it can be informed that the remote party
accepts certificates signed by the warzone CA.  You will then be prompted if
you wish to authenticate against that website with your warzone credentials.
The authentication process is again painless and requires little interaction.
</div>

</div>

<div class="col-md-3 warzoneMargin10px warzoneRoundCorners3px warzoneBackgroundWhite50">
## 2. Activate applications

Once your account is activated,
go to the "Overview" page and enable the applications you want to use.

<a data-toggle="collapse" data-target="#step2">More information...</a>

<div id="step2" class="panel-collapse collapse">

With an account, you can get access to applications in the warzone (e.g. the
VPN).  To get access, you must activate the application so that it is aware of
your account.  You will find a list of available applications on the Overview
page.

Because authentication in the warzone is based on public-key cryptography, we
basically get single-signon functionality for free. Any website accepting
warzone credentials can easily verify whether a visitor has valid credentials
by comparing the presented certificate against the warzone CA, both public
information.

These websites or applications, can offer services available to visitors with
accounts in the warzone. An application may need to keep track of
application-specific information about you, such as a list of IP addresses
which you "own" on the warzone VPN network.  This is why an application needs
to be "activated" for first use. 
</div>

</div>

<div class="col-md-3 warzoneMargin10px warzoneRoundCorners3px warzoneBackgroundWhite50">
## 3. Create keys and roles

You can attach any number of "subkeys" to your account to delegate sets of
privileges (grouped by roles). If a subkey is compromised, you can revoke it.

<a data-toggle="collapse" data-target="#step3">More information...</a>
<div id="step3" class="panel-collapse collapse">
In the unlikely event that the private key locked inside your browser is
exposed and stolen, your warzone account is compromised.  Someone with access
to your private key would be able to impersonate you on the warzone and get
full access to all the warzone applications for which you signed up.

If you plan to connect your own game to the warzone, you will have to copy
credentials onto that game in order for it to connect to the warzone VPN. If
that game gets breached (which is a real possibility, since that is the purpose
of the warzone), those credentials will be compromised. In that case, it would
be favorable that you had not used the credentials of your warzone account.

This is why the warzone registration service allows you to register throw-away
credentials called "subkeys". A subkey is basically a keypair that you generate
offline and then attach to your warzone account.  Once activated, this keypair
can then be used for any purpose. If the key is compromised, you can revoke it,
making it useless to whoever stole it.

In addition to being revocable, subkeys have an RBAC role attached to them
which allows you to limit what they can be used for.

Each application you sign up for, will give you access to a set of privileges.
For instance, the VPN application has a basic privilege to connect to the VPN,
and additional privileges which route traffic to certain static IP addresses,
to your VPN client.  Privileges can be grouped into roles, and those roles can
then be assigned to subkeys.

As a practical example, assume you sign up for the VPN application and get
access to three fixed IP addresses A, B and C.  If you set up a game which only
needs access to IP address A, you can create a role that only has this
privilege and attach it to the subkey you use for this game. When the game is
compromised, you can drop the subkey and attach that same role to a new subkey.

</div>

</div>



</div>
