

// initialize database with sample data
const { sequelize, User } = require("../utils");

const users = [
  { "id": "33d604b4-ae8c-45db-b846-01bee02f8873", "name": "Acridotheres tristis", "email": "mochterlonie1@nasa.gov", "bio": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.", "profilePictureUrl": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl." },
  { "id": "2b55f6fd-610b-4afa-96b5-958bcd3ef527", "name": "Leptoptilus dubius", "email": "mvida2@clickbank.net", "bio": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.", "profilePictureUrl": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis." },
  { "id": "6135b337-6e56-4c07-b7a8-f03983343dc1", "name": "Terathopius ecaudatus", "email": "emulbery3@nsw.gov.au", "bio": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.", "profilePictureUrl": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum." },
  { "id": "2a58ab44-f847-4188-be52-0d54f3f4a3b6", "name": "Callipepla gambelii", "email": "tagirre4@buzzfeed.com", "bio": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.", "profilePictureUrl": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat." },
  { "id": "c5b4cb82-e050-4617-88f0-1c6ef1431f2d", "name": "Myiarchus tuberculifer", "email": "calliott5@mashable.com", "bio": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.", "profilePictureUrl": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius." },
  { "id": "2efd661b-8840-49d9-a46a-b0eacc0e2549", "name": "Lama guanicoe", "email": "gstanmore6@mozilla.com", "bio": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.", "profilePictureUrl": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem." },
  { "id": "3b65e594-9eb7-4b21-a4ec-2632e2d0de6e", "name": "Perameles nasuta", "email": "gguillou7@theglobeandmail.com", "bio": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.", "profilePictureUrl": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero." },
  { "id": "cdc8efdf-86ed-4e3a-8aef-9b99306d8438", "name": "Anas punctata", "email": "cjacobbe8@goo.ne.jp", "bio": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.", "profilePictureUrl": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius." },
  { "id": "7e72b13a-b7f8-4d16-8fac-053cc7ffe992", "name": "Alopochen aegyptiacus", "email": "mwaterhouse9@unblog.fr", "bio": "Nunc rhoncus dui vel sem. Sed sagittis.", "profilePictureUrl": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis." },
  { "id": "d38ad1aa-5313-438a-acf8-e9a870eb2099", "name": "Felis wiedi or Leopardus weidi", "email": "fcardinalea@google.nl", "bio": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.", "profilePictureUrl": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti." },
  { "id": "88b4bd07-0c10-45c1-912d-f280c25efa7b", "name": "Cynictis penicillata", "email": "stoderib@techcrunch.com", "bio": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.", "profilePictureUrl": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque." },
  { "id": "c70ef9a9-6053-4b51-82ed-46145e7915cf", "name": "Salvadora hexalepis", "email": "rbamlettc@etsy.com", "bio": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.", "profilePictureUrl": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem." },
  { "id": "e54079e4-3c15-4bd1-af84-b253dc37869b", "name": "Mazama gouazoubira", "email": "gmizzid@behance.net", "bio": "Nullam molestie nibh in lectus.", "profilePictureUrl": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus." },
  { "id": "3209e8f1-a270-44ba-af75-00f4255fa8f5", "name": "Dendrocygna viduata", "email": "sdeniskeviche@1und1.de", "bio": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.", "profilePictureUrl": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti." },
  { "id": "7f83b28e-48e2-482e-9c73-898ea5ce8d72", "name": "Agkistrodon piscivorus", "email": "nklimushevf@zimbio.com", "bio": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.", "profilePictureUrl": "Fusce consequat. Nulla nisl. Nunc nisl." },
  { "id": "5bc8a810-db00-4a44-8cb9-91e733f0879d", "name": "Butorides striatus", "email": "dgloyensg@tuttocitta.it", "bio": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.", "profilePictureUrl": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem." },
  { "id": "f7003d95-c6b8-4370-96f8-cc27a65436fb", "name": "Ovis dalli stonei", "email": "mconstantineh@dedecms.com", "bio": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.", "profilePictureUrl": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis." },
  { "id": "c87d26c4-a475-4c00-be91-3fe2fa244ee6", "name": "Ursus americanus", "email": "sjoslini@jalbum.net", "bio": "Donec semper sapien a libero. Nam dui.", "profilePictureUrl": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." },
  { "id": "41f20f0f-31b6-420b-9d03-8f32a6494d15", "name": "Ardea cinerea", "email": "rmoreinisj@wisc.edu", "bio": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.", "profilePictureUrl": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus." },
  { "id": "4d0af733-de57-4fd2-8132-5be1a8f3967b", "name": "Galago crassicaudataus", "email": "vcutbushk@fc2.com", "bio": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.", "profilePictureUrl": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem." },
];

Promise.allSettled(users.map(async (record) => {
  try {
    const user = await User.create(record);
    console.log("inserted user!");
    return user;
  } catch (e) {
    console.error(`Error on user ${JSON.stringify(record)}`);
    console.error(e);
  }
}));
