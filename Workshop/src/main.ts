import { CONFIG } from './constants';
import { PostService } from './services/postService';
import { UserService } from './services/userService';
import './style.css'
import { HtmlUtil } from './utils/html';

const root = document.querySelector<HTMLDivElement>('#root');
HtmlUtil.render(root!);

const { baseUrl } = CONFIG;
const userService = new UserService(baseUrl);
const postService = new PostService(baseUrl);
// const user: UserDetails = {
//   id: 2,
//   name: "Pesho",
//   username: "pesho",
//   email: "pesho@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496"
//     }
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets"
//   }
// };

// userService.update(user)
//   .then(user => console.log(user));
// userService.create(user)
//   .then(res => console.log({res}));
// userService.getAll()
//   .then(d => console.log(d));
// userService.getOne(3).then(data => console.log(data));
// userService.delete(3).then(user => console.log(user));

userService.getSingleUser(5, (id: number) => {
  postService.getUserPosts(id)
    .then(data => console.log(data));
});

postService.getAll()
  .then(d => console.log(d));
