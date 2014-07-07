<div class="container col-md-9 mycontent">
Draco warzone
=============

*This is a work in progress, that's why this documentation sucks*
 
Overview
--------

![OverTheWire Warzone network overview](/img/warzone-overview.png)

OverTheWire's warzone network code-named "Draco" allows registered users to connect
to an isolated (VPN) network full of vulnerable hosts and services to practice penetration
testing.

Simply making client computers available on a VPN network would also makes them prone to attack.
The setup currently supports two types of accounts: "client" accounts and "server" accounts.

When connecting a client with a "server" account, a subnet with a fixed IP-range is routed towards 
that client. This IP-range can then be used to add vulnerable hosts to the network, fully exposing them
to other clients in the warzone.

Client using a "safe" account however, have no subnet routed towards them. In fact, the "safe" accounts
are actively protected by a firewall which blocks all connections towards the client.
This type of account can be used by inexperienced users, or users not wishing to expose vulnerable hosts
on the warzone.

Registering an account
----------------------

This warzone is still under development and not open to the public yet. However, you can get an account upon request
if you promise to either host some vulnerable VM, attack a hosted VM or both, and report back about your experiences.
To request an account, contact Steven on OverTheWire's IRC network.

Connecting vulnerable hosts
---------------------------

Server accounts currently have a fixed /29 subnet routed towards them on which vulnerable hosts can be placed.
The easiest way to place VMs on the warzone, is by making use of the Draco VPN router image. This VM will connect to the
warzone, and route traffic between the warzone and any hosts on its internal network.

The Draco VPN router is an opensource project on github and can be found here: <https://github.com/StevenVanAcker/OverTheWire-draco-tools>

To do list
----------

In no specific order:

- automating account creation
- adding a scoreboard
- vulnhost dependencies
- linking up multiple warzones
- an ircbot that indicates hosts connecting/disconnecting

</div>
