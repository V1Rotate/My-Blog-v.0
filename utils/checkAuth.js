import jwt from 'jsonwebtoken';

//authorization check
export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, ''); //using regular expression we remove 'beaere' from the response (Insomnia app) and have bare token.
  if (token) {
    try {
      const decoded = jwt.verify(token, 'olegsecret'); //decoding token using the secret key which was setup up before in index.js

      req.userId = decoded._id;
      next(); //when token was decoded correctly with no issues, so then it turn passes to next func.
    } catch (e) {
      return res.status(403).json({ message: 'No access' });
    }
  } else {
    return res.status(403).json({ message: 'No access' });
  }
  res.send(token); //getting back token only as response;
};
