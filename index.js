class Freelancer  {
    constructor(name, price, occupation){
		this.name = name;
		this.price = price;
		this.occupation = occupation;
    }
}

const freelancers = [];

const importFreelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const displayFreelancers = () => {
	document.body.innerHTML = "";
	const body = document.body;
	const topTitle = document.createElement("h3");
	topTitle.append("Freelancer Forum");
	body.append(topTitle);

	const topContent = document.createElement("p");
	topContent.append("The average starting price is $");
	topContent.append(getAveragePrice(freelancers));
	body.append(topContent);

	const bottomTitle = document.createElement("h3");
	bottomTitle.append("Available Freelancers");
	const middleTitles = document.createElement("h3");
	middleTitles.append("Name | ");
	middleTitles.append("Occupation | ");
	middleTitles.append("Starting Price");
	body.append(bottomTitle);
	body.append(middleTitles);

	const freelancerInfo = document.createElement("ul");
	
	for (let i of freelancers) {
		freelancerInfo.append(appendFreelancerInfo(i));
	}
	body.append(freelancerInfo);
}

const appendFreelancerInfo = (freelancer) => {
	const listItem = document.createElement("li");
	let name = freelancer.name + " | ";
	let occu = freelancer.occupation + " | ";
	let price = freelancer.price;
	listItem.append(name);
	listItem.append(occu);
	listItem.append(price);
	return listItem;
}

const getAveragePrice = function (freelancers) {
	let accum = 0;
	for (let i of freelancers) accum += i.price; 
	return accum;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const run = async () => {
	displayFreelancers();
	await sleep(1000);
	for (let freelancer of importFreelancers) {
		freelancers.push(freelancer);
		displayFreelancers();
		await sleep(1000);
	}
}

run();
