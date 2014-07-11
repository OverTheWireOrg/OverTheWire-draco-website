Warzone account
===============

To make use of the warzone, you need an account.
With an account, you gain access to the OpenVPN network and the warzone registry, which keeps track of all connected
clients, routers and vulnerable servers.

There are two types of accounts: clients and routers.

<div class="row">
<div class="col-md-5 autoSizeImage warzoneMargin10px warzoneRoundCorners3px warzoneBackgroundWhite50">
Client accounts
---------------

![](/img/client-account.png)

Client accounts are the safest option for beginners. 

When connecting using a client account, all incoming connections are automatically filtered by
a firewall. In this way, your computer is not exposed to any more dangers than it would be on
the Internet.

To be on the safe side, we do advise you to connect to the warzone using a virtual machine, so that
any attacks that breach the firewall (e.g. drive-by-download) will still be contained.

</div>
<div class="col-md-1"></div>
<div class="col-md-5 autoSizeImage warzoneMargin10px warzoneRoundCorners3px warzoneBackgroundWhite50">
Router accounts
---------------
![](/img/router-account.png)

Router accounts are aimed at advanced users and allow them to connect their own vulnerable machines.

For advanced users, a firewall between them and the warzone may be undesirable. Router accounts
have no firewall in between the connected computer and the warzone, allowing unfiltered incoming traffic
for advanced techniques such as connect-back shells, or exotic command-and-control setups.

In addition, each router account is linked to a fixed IP range that is routed towards the connected endpoint.
This IP range can be used to connect vulnerable machines to the warzone and allow others to attack them.

</div>
</div>

Registering an account
----------------------

Create a CSR, pick a username
