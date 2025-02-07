const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		message: null,
		token: null,
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white",
		  },
		],
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
  
		getMessage: async () => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
			const data = await resp.json();
			setStore({ message: data.message });
			// don't forget to return something, that is how the async resolves
			return data;
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
		register: async (email, password) => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
			  method: "POST",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify({ email: email, password: password }),
			});
			const data = await resp.json();
			// don't forget to return something, that is how the async resolves
			return data;
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
		login: (email, password) => {
		  fetch(process.env.BACKEND_URL + "/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: email, password: password }),
		  })
			.then((resp) => resp.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
		},
		setToken: () => {
		  setStore({ token: localStorage.getItem("token") });
		},
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ demo: demo });
		},
	  },
	};
  };
  
  export default getState;