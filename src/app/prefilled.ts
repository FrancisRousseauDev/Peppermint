export enum Categories {
  BASS, DRUMS, MID, LOW
}

export const musicians: Musician[] = [
  {
    name: 'Netsky',
    banner: 'assets/images/collections/coll-6.jpg',
    profilePic: 'assets/images/author/author-6.jpg',
    items: [
      {
        name: 'Come and go',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://bafybeia6xwiar5hky3z2mwj5sep5u3m77hme7tqgwmfin7yxlj4a5fsqdq.ipfs.dweb.link/?filename=0.mp3'
      },
      {
        name: 'Hold on',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://bafybeihsmdc5crotv752av6xjzv2c4j7zbjlggxrbqvidsujphzcs54hea.ipfs.dweb.link/?filename=1.mp3'
      },
      {
        name: 'Rio',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://bafybeiaiebkdwjfyasw6tsigxqkhdpe6lravypsmoxpeukuzpxs7abzmc4.ipfs.dweb.link/?filename=2.mp3'
      }
    ]
  },
  {
    name: 'Zwangere guy',
    banner: 'assets/images/collections/coll-5.jpg',
    profilePic: 'assets/images/author/author-5.jpg',
    items: [
      {
        name: 'Beter leven',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://bafybeigcsz5igob2eu42dlpyqzogqkbnwycwm6wh4dejomms6ay3ysidie.ipfs.dweb.link/?filename=3.mp3'
      },
      {
        name: 'Gorik',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://bafybeihit3zmmbhb4qatbayox4jnqqng73rjqep4xrvvjsngagwhhwczwq.ipfs.dweb.link/?filename=4.mp3'
      },
      {
        name: 'Kenny',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://bafybeiadvs2omp6q7y3rx5a5ug3ncya2rdowqkjiciqp4eatd23b3qd7ma.ipfs.dweb.link/?filename=5.mp3'
      }
    ]
  },
  {
    name: 'Drake',
    banner: 'assets/images/collections/coll-4.jpg',
    profilePic: 'assets/images/author/author-4.jpg',
    items: [
      {
        name: 'PassionFruit',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://bafybeigyf4itcdy4dso4zeoejt3g5gc6r75bz5fp2opwdfblx7bcqq3xaq.ipfs.dweb.link/?filename=6.mp3'
      },
      {
        name: 'Gods plan',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://bafybeigcjrqfqlzxivmoumgloc6tkggjfih2hpiwcgjdrke55y5hvv76ae.ipfs.dweb.link/?filename=7.mp3'
      },
      {
        name: 'Girls want Girls',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://bafybeihlaf4ai2k76mrt5dubqcm7zn24swr3pprd2zswrjkz42rz6m5jua.ipfs.dweb.link/?filename=8.mp3'
      }
    ]
  },
  {
    name: 'Bazart',
    banner: 'assets/images/collections/coll-3.jpg',
    profilePic: 'assets/images/author/author-3.jpg',
    items: [
      {
        name: 'PassionFruit',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://ipfs.io/ipfs/QmQQebD8AGGZJ2Jkmq7EPZGUnwaqedovyLQeoJdNgJMZ4X?filename=0.mp3'
      },
      {
        name: 'Gods plan',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://ipfs.io/ipfs/QmNazg7pW2GgS4kkpiUM8RavNxUA3yiTbMAj9Wvs6da5Z9?filename=5.mp3'
      },
      {
        name: 'Girls want Girls',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://ipfs.io/ipfs/QmNdWAmECEJDaGmTzpBdsBoRPdr6EEdA8dAXFrQLEtw8EQ?filename=18.mp3'
      }
    ]
  },
  {
    name: 'Swedish House Maffia',
    banner: 'assets/images/collections/coll-2.jpg',
    profilePic: 'assets/images/author/author-2.jpg',
    items: [
      {
        name: 'PassionFruit',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://ipfs.io/ipfs/QmQQebD8AGGZJ2Jkmq7EPZGUnwaqedovyLQeoJdNgJMZ4X?filename=0.mp3'
      },
      {
        name: 'Gods plan',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://ipfs.io/ipfs/QmNazg7pW2GgS4kkpiUM8RavNxUA3yiTbMAj9Wvs6da5Z9?filename=5.mp3'
      },
      {
        name: 'Girls want Girls',
        categories: [Categories.BASS, Categories.DRUMS],
        trackUri: 'https://ipfs.io/ipfs/QmNdWAmECEJDaGmTzpBdsBoRPdr6EEdA8dAXFrQLEtw8EQ?filename=18.mp3'
      }
    ]
  },
]

export interface Musician {
  name: string,
  banner: string,
  profilePic: string,
  items: Song[]
}


export interface Song {
  name: string,
  categories: Categories[],
  trackUri: string
}
