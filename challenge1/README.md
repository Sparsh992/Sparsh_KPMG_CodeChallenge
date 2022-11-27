Challenge #1

A 3-tier environment is a common setup. Use a tool of your choosing/familiarity create these resources. Please remember we will not be judged on the outcome but more focusing on the approach, style and reproducibility.

reffered link - https://github.com/Azure/azure-quickstart-templates/tree/master/application-workloads/redhat/rhel-3tier-iaas

Template Solution Architecture


<img width="760" alt="image" src="https://user-images.githubusercontent.com/38375244/204156551-4c792317-098c-464d-b2dd-808e98c262f9.png">




This template will deploy:

One Virtual Network with four subnets
4 Network Security Group, one for each subnet
External Load Balancer to load balance Web Traffic(HTTP & HTTPS) to web servers
Internal Load Balancer to load balance traffic for app VM's
2 Public IP’s, one for external Load balancer and other for Jump VM
Virtual Machine Availability sets for Web Tier, Application Tier and Database tier
One Jump VM to faclitate RDP access to all other tier VMs
Multiple windows VMs with nics
