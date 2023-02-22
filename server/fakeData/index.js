export default {
  authors: [
    {
      id: 123,
      name: "Hotex",
    },
    {
      id: 999,
      name: "TungNguyen",
    },
  ],
  folders: [
    {
      id: "1",
      name: "Home",
      createdAt: "2022-11-18T03:42:13Z",
      authorId: 123,
    },
    {
      id: "2",
      name: "New folder",
      createdAt: "2022-11-18T03:42:13Z",
      authorId: 999,
    },
    {
      id: "3",
      name: "Work",
      createdAt: "2022-11-18T03:42:13Z",
      authorId: 123,
    },
  ],
  notes: [
    {
      id: "123",
      content: "<p>Go to supermarket</p>",
      folderId: "1",
    },
    {
      id: "234",
      content: "<p>Go to school</p>",
      folderId: "1",
    },
    {
      id: "123",
      content: "<p>Go to park</p>",
      folderId: "2",
    },
  ],
};