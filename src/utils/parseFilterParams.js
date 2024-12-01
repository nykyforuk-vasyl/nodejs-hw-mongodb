const parseType = (type) => {
  if (typeof type !== 'string') return undefined;

  const allowedTypes = ['work', 'home', 'personal'];
  return allowedTypes.includes(type) ? type : undefined;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return undefined;

  const lowerCaseValue = isFavourite.toLowerCase();
  if (lowerCaseValue === 'true') return true;
  if (lowerCaseValue === 'false') return false;

  return undefined;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  return {
    type: parseType(type),
    isFavourite: parseIsFavourite(isFavourite),
  };
};
