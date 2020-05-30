/** @format */

const data = [
	{
		name: 'John Doe',
		age: 32,
		gender: 'male',
		lookingfor: 'female',
		location: 'Boston, MA',
		image: 'https://randomuser.me/api/portraits/men/82.jpg',
	},

	{
		name: 'Jen Smith',
		age: 222,
		gender: 'female',
		lookingfor: 'male',
		location: 'Smith, MA',
		image: 'https://randomuser.me/api/portraits/women/22.jpg',
	},
	{
		name: 'JimJim WoDoe',
		age: 42,
		gender: 'male',
		lookingfor: 'female',
		location: 'Anchor, MA',
		image: 'https://randomuser.me/api/portraits/men/55.jpg',
	},
];

const profiles = profileIterator(data);

//call first profile
nextProfile();

//next event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile
function nextProfile() {
	const currentProfile = profiles.next().value;

	if (currentProfile !== undefined) {
		document.getElementById('profileDisplay').innerHTML = `
   <ul class="list-group">
     <li class="list-group-item">Name: ${currentProfile.name}</li>
     <li class="list-group-item">Age: ${currentProfile.age}</li>
     <li class="list-group-item">Location: ${currentProfile.location}</li>
     <li class="list-group-item">Gender: ${currentProfile.gender}</li>
     <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
     </ul>
     `;

		document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
	} else {
		//no more profiles
		window.location.reload();
	}
}

//profile iterator
function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function () {
			return nextIndex < profiles.length
				? { value: profiles[nextIndex++], done: false }
				: { done: true };
		},
	};
}
