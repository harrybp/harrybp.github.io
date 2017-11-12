/*
  * Game by Harry BP
  */
  map = [//Default map
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 7, 0, 0, 8, 0, 0, 9, 0, 10, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

    //Game properties
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    //console.log(w + ":" + h);
    
    var gameSize, jumpSpeed, creatureJumpSpeed, gridDimension, playerPosX, playerPosY, playerSpeed, creatureSpeed, startX, startY, arrowSpeed, arrowHeight, playerWidth, playerHeight, gravity;
    var xDeleteDist = 2;
    var yDeleteDist = 5;
    var renderDist = 5;
    var frameLength = 30;
    var damageTimeout = 25;
    var gridSize = 16;
    var logging = false;
    var creatureHealth = 4;
    var creatureAbudance = 3; //One in x
    var prevSize;

    calculateSize(384);
    function calculateSize(x){
      gameSize = parseInt(x);
      playerWidth = gameSize/16;
      playerHeight = (playerWidth*2.5);
      gravity = gameSize/128;
      jumpSpeed = gameSize/16;
      creatureJumpSpeed = gameSize/24;
      gridDimension = parseInt(gameSize/gridSize);
      playerPosX = gameSize/2;
      playerPosY = gameSize/2;
      playerSpeed = gameSize/64;
      creatureSpeed = gameSize/128;
      startX = gameSize/4;
      startY = gameSize/2;
      //startX = 4500;
      //startY = 200;
      arrowSpeed = gravity*4;
      arrowHeight = gameSize/64;
      prevSize = x;
    }


    function getResize(){
      var val = document.getElementById("resize").value;
      gameSize = val;
      die();
      calculateSize(val);
      init();
    }

    function toggleDevMode(){
      logging = !logging;
        for(i = 0; i < 4; i++){
          if(logging){
          borders[i].style.backgroundColor = "transparent";
        } else {
          var bodyStyle = window.getComputedStyle(document.body, null);
          var bgColor = bodyStyle.backgroundColor;
          borders[i].style.backgroundColor = bgColor;
          bottomBorder.textContent = "";
        }
      }
    }
    var borders;
    //Game state
    var tileCount, paused ,gravSpeed, jumpCount, xSpeed, xPosition , xPositionOffset, yPosition, yPositionOffset, col, rowNo, tileLefts, tileTops, moved, crouched, faceDirection, arrowCount, creatureCount, activeCreatureCount, creatures, tiles, hearts, health, dead, damageTime, score, bottomBorder, player, container;
    var pause = [];
    var headTile;
    var maxCol;
    var scoreTile;

    function tileObj(tile, left, top, height, isArrow, direction, isCreature, id){
      this.tile = tile;
      this.left = left;
      this.top = top;
      this.height = height;
      this.isArrow = isArrow;
      this.direction = direction;
      this.isCreature = isCreature;
      this.id = id;
    }

    function creature(tile, head, eye, cGravSpeed, health, frozen, direction){
      this.tile = tile;
      this.cGravSpeed = cGravSpeed;
      this.health = health;
      this.frozen = frozen;
      this.head = head;
      this.eye = eye;
      this.direction = direction;
    }

    window.onload = function(){
    	init();
    }
    //init();
    function init(){
      //Reset gamestate
      tileCount = 0;
      paused = true;
      gravSpeed = 0;
      jumpCount = 0;  
      xSpeed = 0;
      xPosition = 0;
      xPositionOffset = 0;
      yPosition = 0;
      yPositionOffset = 0;
      col = 0;
      rowNo =0;
      tileLefts = Array(10);
      tileTops = Array(10);
      moved = false;
      crouched = false;
      faceDirection = 1;
      arrowCount = 0;
      creatureCount = 0;
      activeCreatureCount = 0;
      creatures = [];
      tiles = [];
      hearts = [5];
      health = 100;
      dead = false;
      score = 0;
      damageTime = 0;
      maxCol = 0;

      //Size and place all elements
      document.body.style.overflowX = "hidden";
      var bodyStyle = window.getComputedStyle(document.body, null);
      var bgColor = bodyStyle.backgroundColor;
      var cont = document.getElementById("gameContainer");
      container = cont;
      cont.textContent = "";
      cont.style.height = gameSize + "px";
      cont.style.width = gameSize + "px";
      cont.style.marginBottom = gameSize/2 + "px";
      cont.style.color = "white";
      cont.style.textAlign = "center";
      cont.style.cssText += "position: relative; z-index: -1; margin: auto;";
      var gCTop = cont.style.top;
      console.log(gCTop);

      //Player
      player = document.createElement("div");
      player.style.cssText += "position: absolute; background-color: #3f5996; height: " + playerHeight + "px; width: " + playerWidth + "px; left: " + playerPosX + "px; top: " + playerPosY + "px; border-width: "+ (playerWidth/0.9) + "px " + (playerWidth/3) + "px "+ (playerWidth/1.5) + "px " + (playerWidth/3) + "px; box-sizing: border-box; border-color:#7f97d1; border-style: solid;";
      var head = document.createElement("div");
      var x = playerWidth/2.4;
      head.style.cssText += "position: absolute; left:"+(-(playerWidth/3))+"px; top:"+ -(playerWidth/0.9)+ "px;border-width: "+ x + "px 0px "+ x + "px "+ x +"px; width: "+playerWidth +"px; height: "+ playerWidth + "px; border-style: solid; border-color: #9e8b00 #9e8b00 #ffe9d3 #9e8b00; box-sizing: border-box; background-color: #ffe9d3;"
      player.appendChild(head);
      headTile = head;
      cont.appendChild(player);
      
      //Borders
      var borderCSS = "position: absolute; background-color:" + bgColor + "; z-index: 3; color: white;";
      var sideCSS = "height: " + (gameSize + 500) + "px; width: " + (wWidth-gameSize)/2 + "px; top: " + (-250) + "px;";
      var topBottomCSS = "height: " + 250 + "px; width: " + gameSize + "px; left: " + 0 + "px; font-size: 200%;";
      var rBorder = document.createElement("div");
      var lBorder = document.createElement("div");
      var bBorder = document.createElement("div");
      var tBorder = document.createElement("div");
      rBorder.style.cssText += borderCSS + sideCSS + "left: " + gameSize + "px;";
      lBorder.style.cssText += borderCSS + sideCSS + "left: " + (-(wWidth-gameSize)/2) + "px;";
      bBorder.style.cssText += borderCSS + topBottomCSS + "top: " + gameSize + "px;";
      tBorder.style.cssText += borderCSS + topBottomCSS + "top: " + (-250) + "px;";
      cont.appendChild(rBorder);
      cont.appendChild(lBorder);
      cont.appendChild(bBorder);
      cont.appendChild(tBorder);
      bottomBorder = bBorder;
      borders = [lBorder, rBorder, tBorder, bBorder];

      //Outline
      var outline = document.createElement("div");
      outline.style.cssText += "position: absolute; background-color: transparent; border: 3px solid white; z-index: 99; width: " + (gameSize-4) + "px; height: " + (gameSize-4) + "px;";
      cont.appendChild(outline);

      //Health indicators
      for(i = 0; i < 5; i++){
        var heart = document.createElement("div");
        heart.style.cssText += "position: absolute; z-index: 3; background-color: red; width: " + gridDimension + "px; height: " + gridDimension + "px; left: " + ((i*2*gridDimension) + gridDimension) + "px; top: " + (gameSize - (2*gridDimension)) + "px; ";
        cont.appendChild(heart);
        hearts[i] = heart;
      }

      //Score tile
      var scoreDiv = document.createElement("div");
      scoreDiv.style.cssText +="font-family: 'Arial Black';position: absolute; z-index: 3; background-color: #7f97d1; top: " + gridDimension + "px; left: " + gridDimension +"px; width: " + gridDimension*3 + "px; height: " + gridDimension + "px;";
      container.appendChild(scoreDiv);
      scoreTile = scoreDiv;

      bottomBorder.innerHTML = "&larr; Move &rarr;<br>&uarr; Jump / Double-Jump &uarr;<br>&darr; Duck &darr;<br>S Shoot | Pause P";
      //Initalise Position
      xPosition = startX;
      yPosition = startY;
      xPositionOffset = xPosition % gridDimension;
      yPositionOffset = yPosition % gridDimension;
      col = Math.floor(xPosition/gridDimension);
      rowNo = Math.floor(yPosition/gridDimension);
      genMap();
      //Load initial tiles
      renderCreatures(); 
      for(x = -1; x < gridSize + 1; x++){
        loadCol(x+col,x*gridDimension);
      }
      paused = false;
    }

    
    function genMap(){
      var length = 1000;
      var height = 30;
      var leeway = 7;
      var minRadius = 3;

      //Initialise arrays
      map = [];
      for(i = 0; i < height; i++){
        map.push([])
      }
      for(i = 0; i < height; i++){
        for(j = 0; j < length; j++){
          map[i][j] = 1;
        }
      }

      //Generate
      var circleYCenter = 16;
      for(circleXCenter = 10; circleXCenter < length; circleXCenter+= 2){
        //console.log(circleXCenter);
        if(circleYCenter < minRadius + leeway){
          change = 3;
        } else if(circleYCenter > (height-minRadius-leeway)){
          change = -3;
        } else {
          var change = 2 - Math.floor(Math.random() * (3 - 1 + 1) + 1);
        }
        
        //console.log(change);
        circleYCenter += change;
        if(circleYCenter < minRadius + leeway){
          circleYCenter = minRadius + leeway;
        } else if(circleYCenter > (height-minRadius-leeway)){
          circleYCenter = (height-minRadius-leeway);
        }
        var cTop = circleYCenter - leeway;
        var cBottom = height - leeway - circleYCenter;
        var maxRadius = Math.min(cTop, cBottom);
        var isCreature = Math.floor(Math.random() * (creatureAbudance - 1 + 1) + 1);
        var radius = Math.floor(Math.random() * (maxRadius - minRadius + 1) + minRadius);
        for(i = 0; i < height; i++){
          for(j = 0; j < length; j++){
            var  x = Math.sqrt(Math.pow(Math.abs(circleYCenter-i),2) + Math.pow(Math.abs(circleXCenter-j),2));
            if(x< radius){
              map[i][j] = 0;
            }
          }
        }
        if(isCreature == 1 && circleXCenter > 15){
          map[circleYCenter+radius][circleXCenter] = creatureCount + 5;
          creatureCount++;
        }
      }
    }

    function loseHealth(amount){
      var time = new Date;
      if(time - damageTime < damageTimeout){
        return;
      }
      damageTime = time;
      health -= amount;
      if(health < 1){
        paused = true;
        die();
      } else {
        var heart = Math.floor(health/20);
        for(i = 4; i > heart; i--){
          hearts[i].style.visibility = "hidden";
        }
        var percent = health % 20;
        hearts[heart].style.width = ((percent/20)*gridDimension) + "px";
      }
      
    }

    function die(){
      dead = true;
      paused = true;
      while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }
      container.textContent = "Game Over! Score: " + score + ". Press 'p' to play again";
    }

    //Calls update Frame repeatedly
    var start = null;
    window.requestAnimationFrame(step);
    function step(timestamp){
      if(!start) start = timestamp;
      var progress = timestamp - start;
      if(progress > frameLength){
        start = timestamp;
        if(!paused){
          updateFrame();
        }
      }
      window.requestAnimationFrame(step);
    }
 
    function updateFrame(){
      //Move objects
      
      if(arrowCount > 0){
        moveArrows();
      }
      if(activeCreatureCount > 0){
        moveCreatures();
        yDeleteDist = 5;
      } else {
        yDeleteDist = 2;
      }
      yAccelerate();
      col = Math.floor(xPosition/gridDimension);
      rowNo = Math.floor(yPosition/gridDimension);
      //if(xSpeed != 0){
        panMap();
      //}
      if(col > maxCol){
        maxCol = col;
        score++;
        scoreTile.textContent = score;
      }
      //Print stats

      if(logging){
        bottomBorder.textContent = tileCount + " tiles loaded | x: " + xPosition + ", col: " + col + " | y: " + yPosition + ", row: " + rowNo + " | Direction: " + faceDirection + " | " + arrowCount + " arrows | " + creatureCount + " creatures (" + activeCreatureCount + " active)" ;
      }
    }


    //For x axis movement
    function panMap(){
        


        var moveAmount = null;
        //Check each tile
        for(i = 0; i < tileCount; i++){
          var pLeftOriginal = tiles[i].left;
          var pTop = tiles[i].top;
          var newPLeft = pLeftOriginal + xSpeed;
          var arrow = false;
          if(tiles[i].isArrow){
            var tileHeight = arrowHeight;
          } else {
            var tileHeight = gridDimension;
          }

          //Check for clash with player
          if(!tiles[i].isCreature && !tiles[i].isArrow && newPLeft < playerPosX + playerWidth && newPLeft + gridDimension > playerPosX && playerPosY + playerHeight > pTop && playerPosY < pTop + tileHeight){
            if(xSpeed < 0){
              newPLeft = playerPosX + playerWidth;
            } else {
              newPLeft = playerPosX - gridDimension;
            }
          } 
          //Get minimum move amount
          if(moveAmount == null || (xSpeed < 0 && newPLeft - pLeftOriginal > moveAmount) || (xSpeed > 0 && newPLeft - pLeftOriginal < moveAmount)){
            moveAmount = newPLeft - pLeftOriginal;
          }
        }
      if(moveAmount != 0){//Move tiles
        moved = true;
        for(i = 0; i < tileCount; i++){
          tiles[i].left += moveAmount;
          //tiles[i].tile.style.left = tiles[i].left + "px";
          if(tiles[i].isCreature && creatures[tiles[i].id].frozen && tiles[i].left > 0 && tiles[i].left < gameSize){
            creatures[tiles[i].id].frozen = false;
            activeCreatureCount++;
          }
        
        }
      }
      
      if(tileCount < 1){//If not tiles then no clash possible
        moveAmount = xSpeed;
      }
      if(tileCount > 20 && moved){
        deleteTiles();
      }
     
      //Render new rows and columns about to come into view
      xPosition-= moveAmount;
      xPositionOffset -= moveAmount;
      while(xPositionOffset > gridDimension){
        xPositionOffset-=gridDimension;
        loadCol(col+gridSize, gameSize-xPositionOffset);
      }
      while(xPositionOffset < -gridDimension){
        xPositionOffset+=gridDimension;
        loadCol(col-1, -gridDimension - (xPositionOffset%gridDimension));
      }
      while(yPositionOffset > gridDimension){
          var test = Math.floor(yPositionOffset/gridDimension)-1;
          yPositionOffset-=gridDimension;
          loadRow(rowNo+gridSize-test, gameSize-yPositionOffset);
        }
      while(yPositionOffset < -gridDimension){
        var test = Math.floor(-yPositionOffset/gridDimension)-1;
        yPositionOffset+=gridDimension;
        loadRow(rowNo-test, -gridDimension-(yPositionOffset%gridDimension));
      }
      
    }

    //For y axis movement
    function yAccelerate(){
      gravSpeed+=gravity;
      var moveAmount = null;

      //Check each tile
      for(i = 0; i < tileCount; i++){
        var pLeft = tiles[i].left;
        var pTopOriginal = tiles[i].top;
        var newPTop = pTopOriginal - gravSpeed;

        if(tiles[i].isArrow){
          var tileHeight = arrowHeight;
        } else {
          var tileHeight = gridDimension;
        }

        //Check for clash with player
        if(!tiles[i].isCreature && !tiles[i].isArrow && pLeft < playerPosX + playerWidth && pLeft + gridDimension > playerPosX && playerPosY + playerHeight > newPTop && playerPosY < newPTop + tileHeight){
            if(gravSpeed > 0){//player falling
              var newPTop = playerPosY + playerHeight;
            } else if(gravSpeed < 0){//Player jumping
              var newPTop = playerPosY - tileHeight;
            }
          }
          //Find minimum move amount possible
          if(moveAmount== null || (gravSpeed > 0 && newPTop - pTopOriginal > moveAmount) || (gravSpeed < 0 && newPTop - pTopOriginal < moveAmount) ){
            moveAmount = newPTop - pTopOriginal;
          }
        }
        if(tileCount < 1){ //If no tiles can be no clashes
          moveAmount = -gravSpeed;
        }
        if(moveAmount != -gravSpeed){//Clash has occured
          if(gravSpeed > 0){
            jumpCount = 0;
          }
          gravSpeed = 0;
          
          
        }
        if(moveAmount != 0){//Move tiles
          moved = true;
          //for(i = 0; i < tileCount; i++){
          
          //tiles[i].tile.style.top = tiles[i].top + "px";
        }
        if(moved){
          for(i = 0; i < tileCount; i++){
            tiles[i].top += moveAmount;
            if(!(tiles[i].isCreature && creatures[tiles[i].id].frozen) && tiles[i].left + gridDimension > -gridDimension && tiles[i].left < gameSize + gridDimension && tiles[i].top + gridDimension > -gridDimension && tiles[i].top < gameSize + gridDimension){
              tiles[i].tile.style.cssText +=";top: " + tiles[i].top + "px; left: " + tiles[i].left + "px;";
              moved = false;
            }
            
          }
        }
        yPosition-=moveAmount;
        yPositionOffset-=moveAmount;
      
    }

    window.onkeydown = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if(key == 38){
          if(jumpCount < 2){
            if(jumpCount < 1){//Jump
              gravSpeed = -jumpSpeed;
            } else {//Double jump
              gravSpeed = -jumpSpeed+2;
            }
            jumpCount ++;
          }
        } 
        if (key == 39) {
          xSpeed = -playerSpeed; //-->Right
          if(faceDirection == -1){
            var x = playerWidth/2.4;
            headTile.style.cssText += "border-width: "+x+"px 0px "+x+"px "+x+"px;";
          }
          faceDirection = 1;
        }else if (key == 37) {
          xSpeed = playerSpeed; //<--Left
          if(faceDirection == 1){
            var x = playerWidth/2.4;
            headTile.style.cssText += "border-width: "+x+"px "+x+"px "+x+"px 0px;";
          }
          faceDirection = -1;
        }
        if(key == 40 && !crouched){//Down\/
          playerHeight -= playerWidth;
          player.style.cssText += "height: " + playerHeight + "px; top: " + (playerPosY + playerWidth) + "px";
          playerPosY+=playerWidth;
          crouched = true;
        }
        if(key == 80){//(P)ause
          if(!dead){
            paused = !paused;
            if(paused){
              if(logging){
                bottomBorder.textContent += " Paused";
              }
              pause[0] = createTile(3*gridDimension, 10*gridDimension, 3*gridDimension, 3*gridDimension, "", true);
              pause[1] = createTile(3*gridDimension, 10*gridDimension, 10*gridDimension, 3*gridDimension, "", true);
              pause[0].style.backgroundColor = "white";
              pause[1].style.backgroundColor = "white";
            } else {
              pause[0].parentNode.removeChild(pause[0]);
              pause[1].parentNode.removeChild(pause[1]);
            }
            
          } else {
            init();
          }
        }
        
        if(key == 81){//(Q)Slowdown
          if(logging){
            frameLength = 80;
          }
          
        }
        if(key == 68){
          if(logging){
            die();
          }
          
        }
      }

    window.onkeyup = function(e) {
      var key = e.keyCode ? e.keyCode : e.which;
      if(key == 39 || key == 37){
        xSpeed = 0;
      }
      if(key == 84){//T for test
        if(logging){
          timeCheck();
        } 
      }
      if(key == 40){
        playerHeight += playerWidth;
        player.style.cssText += "height: " + playerHeight + "px; top: " + (playerPosY - playerWidth) + "px";
        playerPosY-=playerWidth;
        crouched = false;
      }
      if(key == 81){
        frameLength = 30;
      }
      if(key == 83){//(S)hoot
          shoot();
        }
    }

    function createTile(width, height, xOffset, yOffset, image, dontAdd){
      var tile = document.createElement("div");
      var rand = Math.floor(Math.random() * 3);
      var bgColor = "#666666";
      if(rand == 0){
        bgColor = "#727272";
      } else if(rand == 1){
        bgColor = "#5e5e5e";
      }  
      tile.style.cssText += "z-index: 2; position: absolute; background-color:" + bgColor + "; width: " + width + "px; height: " + height + "px; left: " + xOffset + "px; top: " + yOffset + "px;";    
      container.appendChild(tile);

      if(dontAdd){
        return tile;
      } else {
        tiles[tileCount] = new tileObj(tile, xOffset, yOffset, height, false, 0, false, 0);
        tileCount++;
      }
    }

    function loadCol(number, position){
      for(i = -(renderDist-1); i < gridSize+renderDist; i++){
        if(number >= 0 && number < map[0].length && i+rowNo < map.length && i+rowNo >= 0 && map[i+rowNo][number] != 0){
          if(map[i+rowNo][number] >= 5){
            //creatures[map[i+rowNo][number]].frozen = false;
          } else {
            createTile(gridDimension, gridDimension, position, (i+rowNo)*gridDimension-yPosition, "");
          }
        }
      }
    }

    function loadRow(number, position){
      if(number < map.length && number >= 0){
        var row = map[number];
        for(i = -(renderDist-1); i < gridSize+renderDist; i++){
          if(i+col < row.length && i+col >= 0 && row[i+col] != 0){
            if(row[i+col] >= 5){
              //creatures[map[i+rowNo][number]].frozen = false;
            } else {
              createTile(gridDimension, gridDimension, (i+col)*gridDimension-xPosition, position, "");
            }
          }
        }
      } 
    }

    
    
    function renderCreatures(){
      for(j = 0; j < map.length; j++){
        for(i = 0; i < map[j].length; i++){
          if(map[j][i] >= 5){
            var xOffset = ((i*gridDimension)-xPosition);
            var yOffset = (((j-1)*gridDimension)-yPosition);
            var newCreature = createTile(gridDimension, gridDimension, gameSize, 0, "", true);
            newCreature.style.cssText += "border-color:rgb(55,142,61); border-style: solid; box-sizing: border-box; background-color: #7fba6f; border-width: 0px "+gridDimension/3 + "px "+gridDimension/3 +"px "+gridDimension/3 +"px;";
            var head = document.createElement("div");
            head.style.cssText += ";position: absolute; z-index: 4; width: " + playerWidth + "px; height: " + playerWidth + "px; background-color: #73ba60; left: " + -(playerWidth/3) + "px; border-bottom: 2px solid green";//change this
            var eye = document.createElement("div");
            eye.style.cssText += "border-width: "+gridDimension/12+"px "+gridDimension/8+"px "+gridDimension/12+"px "+gridDimension/24+"px; top: "+gridDimension/4+"px;left: "+gridDimension/12+"px;height: "+gridDimension/3+"px;width: " + gridDimension/3 + "px;border-color: white;border-style: solid;box-sizing: border-box;background-color: black;position: absolute;"
            
            head.appendChild(eye);
            newCreature.appendChild(head);
            newCreature.style.height = (2*gridDimension) +"px";
            tiles[tileCount] = new tileObj(newCreature, xOffset, yOffset, 2*gridDimension, false, 0, true, map[j][i]);
            tileCount++;
            creatures[map[j][i]]= new creature(newCreature, head, eye, 0, creatureHealth, true, -1);
            creatureCount++;
          }
        }
      }
    }
    
    function moveCreatures(){
      for(i = 0; i < tileCount; i++){
        if(!tiles[i].isCreature || creatures[tiles[i].id].frozen ){
          continue;
        }
        var intendsToJump = false;
        var jumpConfirmed = false;
        var move = creatures[tiles[i].id].direction * creatureSpeed;
        if(tiles[i].left < playerPosX){
          if(creatures[tiles[i].id].direction != 1){
            creatures[tiles[i].id].direction = 1;
            creatures[tiles[i].id].eye.style.cssText += "border-width: "+gridDimension/12+"px "+gridDimension/24+"px "+gridDimension/12+"px "+gridDimension/8+"px; left: "+gridDimension/2+"px;"
          }
        } else {
          if(creatures[tiles[i].id].direction != -1){
            creatures[tiles[i].id].direction = -1;
            creatures[tiles[i].id].eye.style.cssText += "border-width: "+gridDimension/12+"px "+gridDimension/8+"px "+gridDimension/12+"px "+gridDimension/24+"px; left: "+gridDimension/12+"px;"
          }
        }
        var creature = tiles[i];
        var newLeft = tiles[i].left + move;
        for(j = 0; j < tileCount; j++){
          if(tiles[j].isArrow || i == j || (tiles[j].isCreature && creatures[tiles[j].id].frozen)){
            continue;
          }
          var block = tiles[j];
          if(newLeft < block.left + gridDimension && newLeft + gridDimension > block.left && creature.top + (2*gridDimension) > block.top && creature.top < block.top + gridDimension){
            intendsToJump = true;
            if(move > 0){ //-->
              var newLeftT = block.left - gridDimension;
              if(newLeftT < newLeft){
                newLeft = newLeftT;
              }
            } else {//<--
              var newLeftT = block.left + gridDimension;
              if(newLeftT > newLeft){
                newLeft = newLeftT;
              }
            }
          }
        }
        if(newLeft < playerPosX + playerWidth && newLeft + gridDimension > playerPosX && creature.top + (2*gridDimension) > playerPosY && creature.top < playerPosY + playerHeight){
          if(move > 0){
            var newLeftT = playerPosX - gridDimension;
            if(newLeftT < newLeft){
              newLeft = newLeftT;
            }
          }else {
            var newLeftT = playerPosX + playerWidth;
            if(newLeftT > newLeft){
              newLeft = newLeftT;
            }
          }
          loseHealth(2);
        }
        creature.left = newLeft;

        creatures[creature.id].cGravSpeed += gravity;
        var newTop = creature.top + creatures[creature.id].cGravSpeed;

        for(j = 0; j < tileCount; j++){
          if(tiles[j].isArrow || tiles[j].isCreature){//|| i==j ||(tiles[j].isCreature && creatures[tiles[j].id].frozen)){
            continue;
          }
          var block = tiles[j];
          if(creature.left < block.left + gridDimension && creature.left + gridDimension > block.left && newTop + (2*gridDimension) > block.top && newTop < block.top + gridDimension){         
            if(creatures[creature.id].cGravSpeed > 0){//creature falling
              var newTopT = block.top - (gridDimension*2);
              if(newTopT < newTop){
                newTop = newTopT;
              }
              if(intendsToJump){
                jumpConfirmed = true;
              }
            } else if(creatures[creature.id].cGravSpeed < 0){
              var newTopT = block.top + gridDimension;
              if(newTopT > newTop){
                newTop = newTopT;
              }
            }
          } 
        }

        if(newTop != creature.top + creatures[creature.id].cGravSpeed){
          creatures[creature.id].cGravSpeed = 0;
        }
        if(jumpConfirmed){
          creatures[creature.id].cGravSpeed = -creatureJumpSpeed;
        }
        creature.top = newTop;
        creature.tile.style.cssText += "left: " + newLeft + "px; top: " + newTop + "px;";
      }
    }
    
    function deleteTiles(){
      for(i= 0; i < tileCount; i++){
        if(tiles[i].isArrow){
          continue;
        }

        var left = tiles[i].left;
        var top = tiles[i].top;
        if(left < -(xDeleteDist*gridDimension)||  left > gameSize + ((xDeleteDist-1)*gridDimension) || top < -(yDeleteDist*gridDimension) || top > gameSize + ((yDeleteDist-1)*gridDimension)){
          if(tiles[i].isCreature){
            if(!creatures[tiles[i].id].frozen && creatures[tiles[i].id].health > 0){
              creatures[tiles[i].id].frozen = true;
              activeCreatureCount--;
            }
          } else {
            container.removeChild(tiles[i].tile);
            tiles.splice(i,1);
            tileCount--;
          }
        }
      }
    }

    function shoot(){
      var arrow = document.createElement("div");
      var left = playerPosX + (faceDirection*playerWidth) + playerWidth;
      var borderCSS = "border-left: " + (gridDimension/6) + "px solid black;";
      if(faceDirection == 1){
        left -= playerWidth;
        var borderCSS = "border-right: " + (gridDimension/6) + "px solid black;";
      }
      arrow.style.cssText += "z-index: 2; position: absolute; background-color: white; width: " + (gridDimension/2) + "px; height: " + arrowHeight + "px; left: " + left + "px; top: " + (playerPosY + playerWidth) + "px;" + borderCSS;
      container.appendChild(arrow);
      tiles[tileCount] = new tileObj(arrow, left, playerPosY + playerWidth, arrowHeight, true, faceDirection, false, 0);
      tileCount++;
      arrowCount++;
    }

    function checkClash(tile){
      return(!(tile.top < this[0] + arrowHeight && tile.top+gridDimension > this[0] && tile.left < this[1] && tile.left + gridDimension > this[1]));
    }

    function moveArrows(){
      for(i = 0; i < tileCount; i++){
        if(!tiles[i].isArrow){
          continue;
        }
        tiles[i].left += (arrowSpeed*tiles[i].direction);
        var clash = false;
        for(j = 0; j < tileCount; j++){
          if(tiles[j].top < tiles[i].top + arrowHeight && tiles[j].top+tiles[j].height > tiles[i].top && tiles[j].left < tiles[i].left && tiles[j].left + gridDimension > tiles[i].left){
            clash = true;
            if(tiles[j].isCreature && !creatures[tiles[j].id].frozen &&creatures[tiles[j].id].health > 0){
              creatures[tiles[j].id].health -= 1;
              var val = (255 - (40*creatures[tiles[j].id].health));
              creatures[tiles[j].id].tile.style.borderColor = "rgb(" + (255 - (40*creatures[tiles[j].id].health)) + ",142,61)";
              creatures[tiles[j].id].head.style.borderColor = "rgb(" + (255 - (40*creatures[tiles[j].id].health)) + ",142,61)";
              if(creatures[tiles[j].id].health < 1){
                tiles[j].tile.parentNode.removeChild(tiles[j].tile);
                tiles.splice(j, 1);
                tileCount--;
                i--;
                activeCreatureCount--;
                creatureCount--;
                score += 25;
                scoreTile.textContent = score;
                break;
              }
            }
          }
        }

        if(clash || tiles[i].left > 1000 || tiles[i].left < -1000){
          tiles[i].tile.parentNode.removeChild(tiles[i].tile);
          tiles.splice(i, 1);
          arrowCount--;
          tileCount--;
        } else {
          tiles[i].tile.style.left = tiles[i].left + "px";
        }  
      }
    }

    //Test time for 10000 frames of strafing right and left
    function timeCheck() {
      console.log("Go!");
      var iterations = 10000;
      xSpeed = -1;
      var startTime = Date.now();
      while(iterations > 0){
        updateFrame();
        iterations--;
        if((iterations % 2000) == 0){
          xSpeed =- xSpeed;
          console.log("Switch direction");
        }
      }
      var endTime = Date.now();
      var timeTaken = parseInt(endTime - startTime);
      var fps = parseInt(10000000/timeTaken);
      console.log("Time: " + timeTaken + "ms, thats " + fps + "fps");
      paused = true;
      bottomBorder.textContent = ("Time: " + timeTaken + "ms, thats " + fps + "fps"); 
    }