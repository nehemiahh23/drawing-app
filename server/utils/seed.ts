// 8 Drawings
export const drawings = [
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0f1",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a1",
	  title: "Sunset Over Mountains",
	  locked: true, // has a corresponding post (b1)
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0f2",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a2",
	  title: "Abstract Geometry",
	  locked: true, // has a corresponding post (b2)
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0f3",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a3",
	  title: "Ocean Waves",
	  locked: true, // has a corresponding post (b3)
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0f4",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a4",
	  title: "City Skyline at Night",
	  locked: true, // has a corresponding post (b4)
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0f5",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a5",
	  title: "Forest Path",
	  locked: true, // has a corresponding post (b5)
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0f6",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a2",
	  title: "Rainy Afternoon",
	  locked: false, // no corresponding post
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0f7",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a4",
	  title: "Desert Dunes",
	  locked: false, // no corresponding post
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0f8",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a1",
	  title: "Frozen Lake",
	  locked: false, // no corresponding post
	}
  ];
  
  // 5 Users
  export const users = [
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0a1",
	  email: "alice.chen@example.com",
	  username: "alice_artist",
	  password: "$2b$10$TANj6RoyWaIJtexULL0RnOfPE2HnE6zZxfEUVALspzZ/vRCa0HFh6",
	  likes: []
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0a2",
	  email: "bob.williams@example.com",
	  username: "bobcreates",
	  password: "$2b$10$TANj6RoyWaIJtexULL0RnOfPE2HnE6zZxfEUVALspzZ/vRCa0HFh6",
	  likes: []
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0a3",
	  email: "clara.martinez@example.com",
	  username: "clara_draws",
	  password: "$2b$10$TANj6RoyWaIJtexULL0RnOfPE2HnE6zZxfEUVALspzZ/vRCa0HFh6",
	  likes: []
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0a4",
	  email: "david.kim@example.com",
	  username: "davidsketch",
	  password: "$2b$10$TANj6RoyWaIJtexULL0RnOfPE2HnE6zZxfEUVALspzZ/vRCa0HFh6",
	  likes: []
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0a5",
	  email: "emma.taylor@example.com",
	  username: "emma_creative",
	  password: "$2b$10$TANj6RoyWaIJtexULL0RnOfPE2HnE6zZxfEUVALspzZ/vRCa0HFh6",
	  likes: []
	}
  ];
  
  // 5 Posts
export const posts = [
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0b1",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a1",
	  username: "alice_artist",
	  drawingId: "65a1b2c3d4e5f6a7b8c9d0f1",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  title: "Sunset Over Mountains",
	  likes: 0,
	  commentIds: ["65a1b2c3d4e5f6a7b8c9d0e1", "65a1b2c3d4e5f6a7b8c9d0e2"]
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0b2",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a2",
	  username: "bobcreates",
	  drawingId: "65a1b2c3d4e5f6a7b8c9d0f2",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  title: "My Take on Shapes",
	  likes: 0,
	  commentIds: ["65a1b2c3d4e5f6a7b8c9d0e3"]
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0b3",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a3",
	  username: "clara_draws",
	  drawingId: "65a1b2c3d4e5f6a7b8c9d0f3",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  title: "Ocean Waves",
	  likes: 0,
	  commentIds: ["65a1b2c3d4e5f6a7b8c9d0e4", "65a1b2c3d4e5f6a7b8c9d0e5", "65a1b2c3d4e5f6a7b8c9d0e6"]
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0b4",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a4",
	  username: "davidsketch",
	  drawingId: "65a1b2c3d4e5f6a7b8c9d0f4",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  title: "Lights of the City",
	  likes: 0,
	  commentIds: []
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0b5",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a5",
	  username: "emma_creative",
	  drawingId: "65a1b2c3d4e5f6a7b8c9d0f5",
	  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
	  title: "Forest Path",
	  likes: 0,
	  commentIds: ["65a1b2c3d4e5f6a7b8c9d0e7"]
	}
  ];
  
  // 7 Comments
  export const comments = [
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0e1",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a2",
	  postId: "65a1b2c3d4e5f6a7b8c9d0b1",
	  content: "Beautiful colors in this piece!"
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0e2",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a3",
	  postId: "65a1b2c3d4e5f6a7b8c9d0b1",
	  content: "Love the composition!"
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0e3",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a1",
	  postId: "65a1b2c3d4e5f6a7b8c9d0b2",
	  content: "Very thought-provoking abstract work."
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0e4",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a1",
	  postId: "65a1b2c3d4e5f6a7b8c9d0b3",
	  content: "The water looks so realistic!"
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0e5",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a2",
	  postId: "65a1b2c3d4e5f6a7b8c9d0b3",
	  content: "Amazing detail on the waves."
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0e6",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a4",
	  postId: "65a1b2c3d4e5f6a7b8c9d0b3",
	  content: "This gives me beach vibes!"
	},
	{
	  _id: "65a1b2c3d4e5f6a7b8c9d0e7",
	  userId: "65a1b2c3d4e5f6a7b8c9d0a3",
	  postId: "65a1b2c3d4e5f6a7b8c9d0b5",
	  content: "So peaceful and serene."
	}
  ];