import bcryptjs from 'bcryptjs';

const hash = async (pass, salt = 12) => {
  const genSalt = await bcryptjs.genSalt(salt);
  const hashPass = await bcryptjs.hash(pass, genSalt);

  return hashPass;
};

export default hash;
