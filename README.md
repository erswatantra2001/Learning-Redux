<!-- The actual flow of collecting and sending data to application is : -->

View (the actual source of components) 
    ------> Action (collect data d=from components and APIs)
        ------> Reducers (collect data from Actions and sends to Store) 
            ------> store (main application).



<!-- main files structure is:  -->

1. Components 
2. Containers
3. services 
        ---> Actions
        ---> Reducers
        ---> Constants