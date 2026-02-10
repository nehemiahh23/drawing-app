import type { IUser, IComment, IDrawing } from "../models/types.js";

// 5 Drawings
export const drawings = [
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0f1",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
    userId: "placeholder0000000000000",
    title: "Sunset Over Mountains",
    likes: 0,
    commentIds: ["65a1b2c3d4e5f6a7b8c9d0e1", "65a1b2c3d4e5f6a7b8c9d0e2"]
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0f2",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
    userId: "placeholder0000000000000",
    title: "Abstract Geometry",
    likes: 0,
    commentIds: ["65a1b2c3d4e5f6a7b8c9d0e3"]
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0f3",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
    userId: "placeholder0000000000000",
    title: "Ocean Waves",
    likes: 0,
    commentIds: ["65a1b2c3d4e5f6a7b8c9d0e4", "65a1b2c3d4e5f6a7b8c9d0e5", "65a1b2c3d4e5f6a7b8c9d0e6"]
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0f4",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
    userId: "placeholder0000000000000",
    title: "City Skyline at Night",
    likes: 0,
    commentIds: []
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0f5",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s",
    userId: "placeholder0000000000000",
    title: "Forest Path",
    likes: 0,
    commentIds: ["65a1b2c3d4e5f6a7b8c9d0e7"]
  }
];

// 5 Users
export const users = [
  {
    email: "alice.chen@example.com",
    username: "alice_artist",
    password: "hashed_password_1",
    likes: []
  },
  {
    email: "bob.williams@example.com",
    username: "bobcreates",
    password: "hashed_password_2",
    likes: []
  },
  {
    email: "clara.martinez@example.com",
    username: "clara_draws",
    password: "hashed_password_3",
    likes: []
  },
  {
    email: "david.kim@example.com",
    username: "davidsketch",
    password: "hashed_password_4",
    likes: []
  },
  {
    email: "emma.taylor@example.com",
    username: "emma_creative",
    password: "hashed_password_5",
    likes: []
  }
];

// 7 Comments (with MongoDB ObjectIds and matching drawingIds)
export const comments = [
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0e1",
    userId: "placeholder0000000000000",
    drawingId: "65a1b2c3d4e5f6a7b8c9d0f1",
    content: "Beautiful colors in this piece!"
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0e2",
    userId: "placeholder0000000000000",
    drawingId: "65a1b2c3d4e5f6a7b8c9d0f1",
    content: "Love the composition!"
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0e3",
    userId: "placeholder0000000000000",
    drawingId: "65a1b2c3d4e5f6a7b8c9d0f2",
    content: "Very thought-provoking abstract work."
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0e4",
    userId: "placeholder0000000000000",
    drawingId: "65a1b2c3d4e5f6a7b8c9d0f3",
    content: "The water looks so realistic!"
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0e5",
    userId: "placeholder0000000000000",
    drawingId: "65a1b2c3d4e5f6a7b8c9d0f3",
    content: "Amazing detail on the waves."
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0e6",
    userId: "placeholder0000000000000",
    drawingId: "65a1b2c3d4e5f6a7b8c9d0f3",
    content: "This gives me beach vibes!"
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0e7",
    userId: "placeholder0000000000000",
    drawingId: "65a1b2c3d4e5f6a7b8c9d0f5",
    content: "So peaceful and serene."
  }
];