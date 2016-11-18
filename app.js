var demo = new Vue({

	// A DOM element to mount our view model.
	el: '#main',

	// Define properties and give them initial values.
	data: {
		active: 'home',
		projectlist: false,
		contactlist: false,
		homelist: true,
		serviceslist: false,
		searchString: "",
        articles: [
            {
                "title": "Confident Mindset",
                "url": "http://www.confidentmindset.com/",
                "image": "http://i.imgur.com/QyMnYqB.png"
            },
            {
                "title": "Instaclone",
                "url": "https://github.com/AG-Systems/instaclone",
                "image": "http://i.imgur.com/QyMnYqB.png"
            },
            {
                "title": "Transistor",
                "url": "https://github.com/AG-Systems/Transistor",
                "image": "http://i.imgur.com/QyMnYqB.png"
            },
            {
                "title": "Markov-chain",
                "url": "https://github.com/AG-Systems/MicroProjects/tree/master/MachineLearning/markov-chain/src",
                "image": "http://i.imgur.com/mRH4wh3.png"
            },
            {
                "title": "News Summary Site",
                "url": "https://github.com/AG-Systems/xauriga/tree/master/NewSite",
                "image": "http://i.imgur.com/UkdbcHS.png"
            },
            {
                "title": "Entire list",
                "url": "https://github.com/AG-Systems?tab=repositories",
                "image": "http://i.imgur.com/pVGJGKo.png"
            }
        ]
	},
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return articles_array;
        }
    },
	// Functions we will be using.
	methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
			if(item == "projects")
			{
				this.projectlist = true;
				this.contactlist = false;
				this.serviceslist = false;
				this.homelist = false;
			}
			else if(item == "contact")
			{
				this.contactlist = true;
				this.projectlist = false;
				this.serviceslist = false;
				this.homelist = false;
			}
			else if(item == "home")
			{
				this.contactlist = false;
				this.projectlist = false;
				this.serviceslist = false;
				this.homelist = true;
			}
			else
			{
				this.contactlist = false;
				this.projectlist = false;
				this.serviceslist = true;
				this.homelist = true;	
			}
		}
	}
});
