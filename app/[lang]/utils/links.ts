export function homeLinks(dictionary: Dictionary): LinkData[] {
  return [{ name: dictionary.home.publicSector, url: "/public-sector" }];
}

export function publicSectorLinks(dictionary: Dictionary): LinkData[] {
  return [
    { name: dictionary.publicSector.education, url: "/public-sector/education" }
  ];
}

export function educationLinks(dictionary: Dictionary): LinkData[] {
  return [
    {
      name: dictionary.education.principals,
      url: "public-sector/education/principals"
    }
  ];
}
