## Criteria

Your work will be evaluated primarily on:

* Consistency of coding style (ideally in harmony with our [JavaScript style guide](https://github.com/poshaQ/poshaq-coding-styleguide/tree/master/doc/development)
* Idiomatic use of `express`,`node`, `mongodb`, and `lodash` (Don't use for loops, `lodash` is mandatory)
* Absence of **callback hell**
* Documentation of API end-points
* Efficient MongoDB queries
* General quality of code and technical communication.

## Task

1) Create MongoDB using the csv files. One collection per file. **Define database schema**. Data is given in [Here](https://drive.google.com/open?id=1-ohP6l1eTJEj566rgGRy4vAed7Hnwk0Q)

2) Create end-point to add new entry

	Input format
	
	```
	{
		"movie_id" : String,
		"title" : String,
		.
		.
		.
		"budget" : Number,
		"genres" : Array,
		"homepage" : Array,
		.
		.
		.
		"vote_average" : Number,
		"vote_count" : Number
	}
	```

3) Create end-pont which populates profit earned by production house **in a given year**. Here profit is calculated as [**Revenue - Budget**].

	Output format

	```
	{
		"<name of production_company_1>" : <profit_1>,
		"<name of production_company_2>" : <profit_2>,
		.
		.
		.
		"<name of production_company_n>" : <profit_n>
	}
	Note: Assume, Revenue and Budget are ditributed equaly over all production companies for a given movie.
	```

4) 	For a given movie find N similar movies. Similarity can be checked using what number of keywords are matching between input movie and avaialable movies. Sort the result in **descending** order. if count are same then combine those movie names and make an array, if not then make an array of single movie name.
	
	Output format

	```
	[
		{
			"movie_names" : [<movie_1>,<movie_2>],
			"Number of keywords matched" : <count_1>
		},
		{
			"movie_names" : [<movie_3>],
			"Number of keywords matched" : <count_2>
		},
		.
		.
		.
		{
			"movie_name" : [<movie_N>],
			"Number of keywords matched" : <count_N>
		}
	]
	```
5) Given a movie name, for **each cast member** of the movie, find the number of movies **per genre** in which the actor casted. If a movie has multiple genre then count it as one for each genre.

	Output format
	
	```
	[
		{
			"actor_name": <actor_1>,
			"movies_per_genre": [
				{
					"genre": <actor_1_genre_1>, // genre_1 for actor_1
					"number of movies": <count_1>
				},
				{
					"genre": <actor_1_genre_2>, // genre_2 for actor_1
					"number of movies": <count_2>
				},
				.
				.
				.
				{
					"genre": <actor_1_genre_n>, // genre_n for actor_1
					"number of movies": <count_n>
				}
			]
		},
		{
			"actor_name": <actor_2>,
			"movies_per_genre": [
				{
					"genre": <actor_2_genre_1>, // genre_1 for actor_2
					"number of movies": <count_1>
				},
				{
					"genre": <actor_2_genre_2>, // genre_2 for actor_2
					"number of movies": <count_2>
				},
				.
				.
				.
				{
					"genre": <actor_2_genre_n>, // genre_n for actor_2
					"number of movies": <count_n>
				}
			]
		}

	]
	```
## Extra credit
* Integrate Apollo and Express to build a Node.js GraphQL API istead of REST API
* Dockerize your app	
	* Note: You can build your image in alpine or debian

## How to submit your work

Fork this project on github. When you're finished, push final code in to the public repository. *Consider using `.gitignore` to avoid putting node_modules*
