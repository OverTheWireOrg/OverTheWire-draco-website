<div class="row">
<div class="col-md-4">[&#8592; Configuring your OpenVPN client](/#/help/configure-openvpn)</div>
<div class="col-md-4">[&#8593; Overview](/#/help)</div>
<div class="col-md-4"></div>
</div>

Connecting vulnerable hosts
===========================

Server accounts currently have a fixed /29 subnet routed towards them on which vulnerable hosts can be placed.
The easiest way to place VMs on the warzone, is by making use of the Draco VPN router image. This VM will connect to the
warzone, and route traffic between the warzone and any hosts on its internal network.

The Draco VPN router is an opensource project on github and can be found here: <https://github.com/StevenVanAcker/OverTheWire-draco-tools>

