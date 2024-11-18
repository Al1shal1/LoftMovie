// https://imdb8.p.rapidapi.com/title/find?q=tt0356910

export const movieFindMock = {
  "@meta": {
    operation: "Search",
    requestId: "4a841f9e-5fe6-461c-b7e2-62235abec521",
    serviceTimeMs: 212.09436,
  },
  "@type": "imdb.api.find.response",
  query: "tt0356910",
  results: [
    {
      id: "/title/tt0356910/",
      image: {
        height: 2048,
        id: "/title/tt0356910/images/rm2549451776",
        url: "https://m.media-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_.jpg",
        width: 1390,
      },
      runningTimeInMinutes: 120,
      title: "Mr. & Mrs. Smith",
      titleType: "movie",
      year: 2005,
      principals: [
        {
          id: "/name/nm0000093/",
          legacyNameText: "Pitt, Brad",
          name: "Brad Pitt",
          billing: 1,
          category: "actor",
          characters: ["John Smith"],
          roles: [
            { character: "John Smith", characterId: "/character/ch0005693/" },
          ],
        },
        {
          id: "/name/nm0001401/",
          legacyNameText: "Jolie, Angelina",
          name: "Angelina Jolie",
          billing: 2,
          category: "actress",
          characters: ["Jane Smith"],
          roles: [
            { character: "Jane Smith", characterId: "/character/ch0005694/" },
          ],
        },
        {
          disambiguation: "I",
          id: "/name/nm0111013/",
          legacyNameText: "Brody, Adam (I)",
          name: "Adam Brody",
          billing: 4,
          category: "actor",
          characters: ["Benjamin Danz"],
          roles: [
            {
              character: "Benjamin Danz",
              characterId: "/character/ch0005697/",
            },
          ],
        },
      ],
    },
  ],
  types: ["title", "name"],
};

//https://imdb8.p.rapidapi.com/title/get-charname-list?id=nm0000093%26id%3Dnm0001401%26id%3Dnm0111013&tconst=tt0356910
export const movieCharnameListMock = {
  nm0000093: {
    name: {
      "@type": "imdb.api.name.base",
      akas: ["Weatherman"],
      id: "/name/nm0000093/",
      image: {
        height: 2048,
        id: "/name/nm0000093/images/rm864335360",
        url: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
        width: 1363,
      },
      legacyNameText: "Pitt, Brad",
      name: "Brad Pitt",
    },
    knownfor: null,
    jobs: null,
    starmeter: null,
    bornon: null,
    charname: [
      {
        akas: ["Weatherman"],
        id: "/name/nm0000093/",
        image: {
          height: 2048,
          id: "/name/nm0000093/images/rm864335360",
          url: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
          width: 1363,
        },
        legacyNameText: "Pitt, Brad",
        name: "Brad Pitt",
        billing: 1,
        category: "actor",
        characters: ["John Smith"],
        roles: [
          { character: "John Smith", characterId: "/character/ch0005693/" },
        ],
      },
    ],
  },
  nm0001401: {
    name: {
      "@type": "imdb.api.name.base",
      akas: ["Angelina", "Angelina Jolie Pitt", "Angelina Jolie Voight"],
      id: "/name/nm0001401/",
      image: {
        height: 2048,
        id: "/name/nm0001401/images/rm3738743040",
        url: "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg",
        width: 1665,
      },
      legacyNameText: "Jolie, Angelina",
      name: "Angelina Jolie",
    },
    knownfor: null,
    jobs: null,
    starmeter: null,
    bornon: null,
    charname: [
      {
        akas: ["Angelina", "Angelina Jolie Pitt", "Angelina Jolie Voight"],
        id: "/name/nm0001401/",
        image: {
          height: 2048,
          id: "/name/nm0001401/images/rm3738743040",
          url: "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg",
          width: 1665,
        },
        legacyNameText: "Jolie, Angelina",
        name: "Angelina Jolie",
        billing: 2,
        category: "actress",
        characters: ["Jane Smith"],
        roles: [
          { character: "Jane Smith", characterId: "/character/ch0005694/" },
        ],
      },
    ],
  },
  nm0111013: {
    name: {
      "@type": "imdb.api.name.base",
      disambiguation: "I",
      id: "/name/nm0111013/",
      image: {
        height: 400,
        id: "/name/nm0111013/images/rm3195898112",
        url: "https://m.media-amazon.com/images/M/MV5BOTY3NzMzMjgyMl5BMl5BanBnXkFtZTcwNjc2OTM4Mg@@._V1_.jpg",
        width: 279,
      },
      legacyNameText: "Brody, Adam (I)",
      name: "Adam Brody",
    },
    knownfor: null,
    jobs: null,
    starmeter: null,
    bornon: null,
    charname: [
      {
        disambiguation: "I",
        id: "/name/nm0111013/",
        image: {
          height: 400,
          id: "/name/nm0111013/images/rm3195898112",
          url: "https://m.media-amazon.com/images/M/MV5BOTY3NzMzMjgyMl5BMl5BanBnXkFtZTcwNjc2OTM4Mg@@._V1_.jpg",
          width: 279,
        },
        legacyNameText: "Brody, Adam (I)",
        name: "Adam Brody",
        billing: 4,
        category: "actor",
        characters: ["Benjamin Danz"],
        roles: [
          { character: "Benjamin Danz", characterId: "/character/ch0005697/" },
        ],
      },
    ],
  },
};
