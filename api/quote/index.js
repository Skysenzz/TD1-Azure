const https = require('https');

const unplashApi = 'https://www.themoviedb.org/t/p/original/fb2lKRIPzk9wSJwkY0k0QNzn5Rj.jpg';
const quotes = [
  'J\'ai les dents du fond qui baignent.',
  'Je vais mettre la viande dans le torchon.',
  'Je vais couler un bronze.',
  'Y\'a pas à tortiller du cul pour chier droit.',
  'Il se mouche pas du coude celui-là.',
  'J\'ai le cigare au bord des lèvres.',
  'Je vais lui casser les pattes arrière.',
  'Y\'a les Anglais qui débarquent.',
  'T\'as chié dans la colle, mon gars.',
  'Il a le cul bordé de nouilles celui-là.',
  'Y\'a une couille dans le potage.',
  'Comme mes couilles lui, toujours entre mes pattes.',
  'À la bonne franquette, hein !',
  'C\'est à se taper le cul par terre.',
  'Baisse ta culotte, c\'est moi qui pilote.',
  'Tu vas pas nous chier un sablier.',
  'T\'as une trichine dans le jambonneau.',
  'J\'me suis cassé la margoulette.',


];

async function getImage() {
  return new Promise((resolve, reject) => {
    https.get(unplashApi, (response) => {
      // API returns a HTTP 302 code, we only want the final image URL
      resolve(response.headers.location);
    }).on('error', (error) => {
      reject(error.message);
    });
  });
}

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const image = await getImage();
  const text = quotes[Math.floor(Math.random() * quotes.length)];

  context.res = {
    body: {
      image,
      text
    }
  };
};
