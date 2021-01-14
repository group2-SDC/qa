# Q&A
## Motivation
The goal of this project was to work with a legacy code base, and optimize the back end to design a system that was capable of handling high volume traffic spike events like cyber monday. In this project, I stress tested Cassandra and Postgres to see which one would perform better for my goal. Deployed two load balancers, four dockerized proxy servers, and 12 dockerized service images to ec2. Ultimately, through database optimization and an efficient system design, I was able to achieve 75,000 requests per minute, with an average response time of around 75ms, and a 0% error rate. As I mentioned earlier, this was a legacy code base, meaning most of the work that I did is not reflected in the actual repository.
### Screenshots
Preoptimization max RPM
![Alt text](/Preop.png?raw=true "Home Screen")
![Alt text](/preop2.png?raw=true "Home Screen")
Post optimization max RPM
![Alt text](/SDC%20Screenshot.png?raw=true "Home Screen")

#### installation
npm install  
npm run build  
npm start  
##### license
ISC @ Travis Bright
