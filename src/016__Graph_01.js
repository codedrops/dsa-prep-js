

==> Nodes
==> Connections

Uses:-

Social Networks
Location / Mapping
Routing Algoritms
Visual Hierarchy
File System optimization

Essential Graph Terms:-

==> Vertex - a node
==> Edge - connection between nodes
==> Weighted/Unweighted - values assigned to distances b/w vertices.
==> Directed/Undirected - direction assigned to distance b/w vertices


Storing Graphs:-

==> Adjacency Matrix
==> Adjacency List

________________________________________
Big O         |  List       | Matrix
______________|_____________|___________
Add vertex    |  O(1)       | O(|V^2|)
Add Edge      |  O(1)       | O(1)
Remove Vertex |  O(|V|+|E|) | O(|V^2|)
Remove Edge   |  O(|E|)     | O(1)
Query         |  O(|V|+|E|) | O(1)
Storage       |  O(|V|+|E|) | O(|V^2|)
________________________________________

