At poshaQ we use dashboards to let our clients submit jobs and to let them know about the status and results. In this assignment, you’ll be developing a prototype of one of these dashboards.

## Criteria

Your work will be evaluated primarily on:

* Idiomatic use of `AngularJS` / `Angular` / `React Native` / `ReactJS` for frontend and `ExpressJS`, `NodeJS` for backend. Any database preferable from `MongoDB` / `PostgreSQL` / `MySQL`. Use of JavaScript compiler like `Gulp` / `Grunt` / `Webapck` / `Babel`
* Responsive Design
* Reusable Code (Components, Services, Directives, Containers, Stores, Reducers, Middlewares or anything in general)
* Routing
* State Management
* Elegant UI

## Task

* Develop a dashboard from where the client can submit an image/ group of images/ zip folder. In any case, while uploading the data extract meta-data from the input and insert into databse. In meta-data these field are mandatory: `Image Name`, `Image Extention`, `Image Resolution (In Pixels)`, `etc`. While this task is running make UI/ UX intutive i.e., user should be able to know what is happening.
* After complition of uploading task, show all the images on front page. Prepare two views 1) Images can be shown as a list structure or 2) Images can be shown as grid sructure. Give an toggle button to choose which kind of view the user wants. Note that their might be 1000 images.
* Uploaded Images (Document) should be editable i.e., the user should be able to add any amount tags and its description for a particular image.
* Add these features
	* Sort the data with respect to `Image Name`.
	* Filter the data based on `Image Extension` and other tags which have been added by user
* Make an export functionality which gives you an excel file in which columns are field names **(meta-data + user provided tags)** and rows are number of documents. Unique value will be the `Image Name`.

## Extra credit

* Live UI (Using WebSockets or EventSource), Service Workers
* Dockerize your frontend and backend
	* Note: You can build your image in alpine or debian

## How to submit your work

Fork this project on github. When you're finished, push final code in to the public repository. *Consider using `.gitignore` to avoid putting node_modules*