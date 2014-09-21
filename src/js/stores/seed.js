
var users = [
  {
    name: 'Pedro Nauck',
    avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/1779251_670751156305145_372080654_n.jpg?oh=d86fd603d48559fb6257c643aff82ab4&oe=54CBA8CF&__gda__=1422197598_96c18deb03efbff366da9b0d332dc8df',
    notifications: 0,
    last: {
      name: 'Palmer Olivera',
      message: 'E agora ? Quem está com a razão ?'
    },
    active: true,
    messages: [
      { name: 'Pedro Nauck',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/1779251_670751156305145_372080654_n.jpg?oh=d86fd603d48559fb6257c643aff82ab4&oe=54CBA8CF&__gda__=1422197598_96c18deb03efbff366da9b0d332dc8df',
        message: 'Pra mim React é o melhor!',
        owner: true
      },
      { name: 'Vitor Britto',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c1.22.541.541/s160x160/10455237_10203035256821180_4437426707355918472_n.jpg?oh=02b8cd51edc834d30df7deec8b70df44&oe=5483A1F1&__gda__=1418753818_320fcab9d84a539ab36f2a746c9b4d54',
        message: 'Não concordo! Estou desenvolvendo outra solução',
        owner: false
      },
      { name: 'Suissa',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10678627_10152664593828895_4163476099707638705_n.jpg?oh=b07ef3dc172965a2d5599b880c715cde&oe=5488CF8A&__gda__=1418383199_45ef8bd8f152a13990247d1b25035346',
        message: 'Ah para galera! Todo mundo sabe que o futuro é Coffee Script',
        owner: false
      },
      { name: 'Ju Gonçalves',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/10525577_913475938679393_6396725719215298799_n.jpg?oh=d9f8eabfd584ac697bd7746702edb15c&oe=548E90D2&__gda__=1418692396_934e599654453bf97f15b7cab52dc4e5',
        message: 'Ixi rapazes! Melhor mesmo é JS puro',
        owner: false
      },
      { name: 'Sérgio Rafael Siqueira',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.0.160.160/p160x160/10312452_10202976250182212_5918676067838931494_n.jpg?oh=2ef2e25e639c898bc2c2898cd9fa77b9&oe=54CE26DA&__gda__=1418174860_b639d703a79fecadc2ef5827b8f623a9',
        message: 'Backbone meninada, Backbone ...',
        owner: false
      },
      { name: 'Palmer Oliveira',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/expalmer/128.jpg',
        message: 'E agora ? Quem está com a razão ?',
        owner: false
      }
    ]
  },
  {
    name: 'Vitor Britto',
    avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c1.22.541.541/s160x160/10455237_10203035256821180_4437426707355918472_n.jpg?oh=02b8cd51edc834d30df7deec8b70df44&oe=5483A1F1&__gda__=1418753818_320fcab9d84a539ab36f2a746c9b4d54',
    notifications: 4,
    last: {
      name: 'Palmer Olivera',
      message: 'E agora ? Quem está com a razão ?'
    },
    active: false,
    messages: [
      { name: 'Pedro Nauck',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/1779251_670751156305145_372080654_n.jpg?oh=d86fd603d48559fb6257c643aff82ab4&oe=54CBA8CF&__gda__=1422197598_96c18deb03efbff366da9b0d332dc8df',
        message: 'Pra mim React é o melhor!',
        owner: false
      },
      { name: 'Vitor Britto',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c1.22.541.541/s160x160/10455237_10203035256821180_4437426707355918472_n.jpg?oh=02b8cd51edc834d30df7deec8b70df44&oe=5483A1F1&__gda__=1418753818_320fcab9d84a539ab36f2a746c9b4d54',
        message: 'Não concordo! Estou desenvolvendo outra solução',
        owner: true
      },
      { name: 'Suissa',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10678627_10152664593828895_4163476099707638705_n.jpg?oh=b07ef3dc172965a2d5599b880c715cde&oe=5488CF8A&__gda__=1418383199_45ef8bd8f152a13990247d1b25035346',
        message: 'Ah para galera! Todo mundo sabe que o futuro é Coffee Script',
        owner: false
      },
      { name: 'Ju Gonçalves',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/10525577_913475938679393_6396725719215298799_n.jpg?oh=d9f8eabfd584ac697bd7746702edb15c&oe=548E90D2&__gda__=1418692396_934e599654453bf97f15b7cab52dc4e5',
        message: 'Ixi rapazes! Melhor mesmo é JS puro',
        owner: false
      },
      { name: 'Sérgio Rafael Siqueira',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.0.160.160/p160x160/10312452_10202976250182212_5918676067838931494_n.jpg?oh=2ef2e25e639c898bc2c2898cd9fa77b9&oe=54CE26DA&__gda__=1418174860_b639d703a79fecadc2ef5827b8f623a9',
        message: 'Backbone meninada, Backbone ...',
        owner: false
      },
      { name: 'Palmer Oliveira',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/expalmer/128.jpg',
        message: 'E agora ? Quem está com a razão ?',
        owner: false
      }
    ]
  },
  {
    name: 'Suissa',
    avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10678627_10152664593828895_4163476099707638705_n.jpg?oh=b07ef3dc172965a2d5599b880c715cde&oe=5488CF8A&__gda__=1418383199_45ef8bd8f152a13990247d1b25035346',
    notifications: 3,
    last: {
      name: 'Palmer Olivera',
      message: 'E agora ? Quem está com a razão ?'
    },
    active: false,
    messages: [
      { name: 'Pedro Nauck',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/1779251_670751156305145_372080654_n.jpg?oh=d86fd603d48559fb6257c643aff82ab4&oe=54CBA8CF&__gda__=1422197598_96c18deb03efbff366da9b0d332dc8df',
        message: 'Pra mim React é o melhor!',
        owner: false
      },
      { name: 'Vitor Britto',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c1.22.541.541/s160x160/10455237_10203035256821180_4437426707355918472_n.jpg?oh=02b8cd51edc834d30df7deec8b70df44&oe=5483A1F1&__gda__=1418753818_320fcab9d84a539ab36f2a746c9b4d54',
        message: 'Não concordo! Estou desenvolvendo outra solução',
        owner: false
      },
      { name: 'Suissa',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10678627_10152664593828895_4163476099707638705_n.jpg?oh=b07ef3dc172965a2d5599b880c715cde&oe=5488CF8A&__gda__=1418383199_45ef8bd8f152a13990247d1b25035346',
        message: 'Ah para galera! Todo mundo sabe que o futuro é Coffee Script',
        owner: true
      },
      { name: 'Ju Gonçalves',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/10525577_913475938679393_6396725719215298799_n.jpg?oh=d9f8eabfd584ac697bd7746702edb15c&oe=548E90D2&__gda__=1418692396_934e599654453bf97f15b7cab52dc4e5',
        message: 'Ixi rapazes! Melhor mesmo é JS puro',
        owner: false
      },
      { name: 'Sérgio Rafael Siqueira',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.0.160.160/p160x160/10312452_10202976250182212_5918676067838931494_n.jpg?oh=2ef2e25e639c898bc2c2898cd9fa77b9&oe=54CE26DA&__gda__=1418174860_b639d703a79fecadc2ef5827b8f623a9',
        message: 'Backbone meninada, Backbone ...',
        owner: false
      },
      { name: 'Palmer Oliveira',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/expalmer/128.jpg',
        message: 'E agora ? Quem está com a razão ?',
        owner: false
      }
    ]
  },
  {
    name: 'Ju Gonçalves',
    avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/10525577_913475938679393_6396725719215298799_n.jpg?oh=d9f8eabfd584ac697bd7746702edb15c&oe=548E90D2&__gda__=1418692396_934e599654453bf97f15b7cab52dc4e5',
    notifications: 2,
    last: {
      name: 'Palmer Olivera',
      message: 'E agora ? Quem está com a razão ?'
    },
    active: false,
    messages: [
      { name: 'Pedro Nauck',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/1779251_670751156305145_372080654_n.jpg?oh=d86fd603d48559fb6257c643aff82ab4&oe=54CBA8CF&__gda__=1422197598_96c18deb03efbff366da9b0d332dc8df',
        message: 'Pra mim React é o melhor!',
        owner: false
      },
      { name: 'Vitor Britto',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c1.22.541.541/s160x160/10455237_10203035256821180_4437426707355918472_n.jpg?oh=02b8cd51edc834d30df7deec8b70df44&oe=5483A1F1&__gda__=1418753818_320fcab9d84a539ab36f2a746c9b4d54',
        message: 'Não concordo! Estou desenvolvendo outra solução',
        owner: false
      },
      { name: 'Suissa',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10678627_10152664593828895_4163476099707638705_n.jpg?oh=b07ef3dc172965a2d5599b880c715cde&oe=5488CF8A&__gda__=1418383199_45ef8bd8f152a13990247d1b25035346',
        message: 'Ah para galera! Todo mundo sabe que o futuro é Coffee Script',
        owner: false
      },
      { name: 'Ju Gonçalves',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/10525577_913475938679393_6396725719215298799_n.jpg?oh=d9f8eabfd584ac697bd7746702edb15c&oe=548E90D2&__gda__=1418692396_934e599654453bf97f15b7cab52dc4e5',
        message: 'Ixi rapazes! Melhor mesmo é JS puro',
        owner: true
      },
      { name: 'Sérgio Rafael Siqueira',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.0.160.160/p160x160/10312452_10202976250182212_5918676067838931494_n.jpg?oh=2ef2e25e639c898bc2c2898cd9fa77b9&oe=54CE26DA&__gda__=1418174860_b639d703a79fecadc2ef5827b8f623a9',
        message: 'Backbone meninada, Backbone ...',
        owner: false
      },
      { name: 'Palmer Oliveira',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/expalmer/128.jpg',
        message: 'E agora ? Quem está com a razão ?',
        owner: false
      }
    ]
  },
  {
    name: 'Sérgio Rafael Siqueira',
    avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.0.160.160/p160x160/10312452_10202976250182212_5918676067838931494_n.jpg?oh=2ef2e25e639c898bc2c2898cd9fa77b9&oe=54CE26DA&__gda__=1418174860_b639d703a79fecadc2ef5827b8f623a9',
    notifications: 1,
    last: {
      name: 'Palmer Olivera',
      message: 'E agora ? Quem está com a razão ?'
    },
    active: false,
    messages: [
      { name: 'Pedro Nauck',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/1779251_670751156305145_372080654_n.jpg?oh=d86fd603d48559fb6257c643aff82ab4&oe=54CBA8CF&__gda__=1422197598_96c18deb03efbff366da9b0d332dc8df',
        message: 'Pra mim React é o melhor!',
        owner: false
      },
      { name: 'Vitor Britto',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c1.22.541.541/s160x160/10455237_10203035256821180_4437426707355918472_n.jpg?oh=02b8cd51edc834d30df7deec8b70df44&oe=5483A1F1&__gda__=1418753818_320fcab9d84a539ab36f2a746c9b4d54',
        message: 'Não concordo! Estou desenvolvendo outra solução',
        owner: false
      },
      { name: 'Suissa',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10678627_10152664593828895_4163476099707638705_n.jpg?oh=b07ef3dc172965a2d5599b880c715cde&oe=5488CF8A&__gda__=1418383199_45ef8bd8f152a13990247d1b25035346',
        message: 'Ah para galera! Todo mundo sabe que o futuro é Coffee Script',
        owner: false
      },
      { name: 'Ju Gonçalves',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/10525577_913475938679393_6396725719215298799_n.jpg?oh=d9f8eabfd584ac697bd7746702edb15c&oe=548E90D2&__gda__=1418692396_934e599654453bf97f15b7cab52dc4e5',
        message: 'Ixi rapazes! Melhor mesmo é JS puro',
        owner: false
      },
      { name: 'Sérgio Rafael Siqueira',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.0.160.160/p160x160/10312452_10202976250182212_5918676067838931494_n.jpg?oh=2ef2e25e639c898bc2c2898cd9fa77b9&oe=54CE26DA&__gda__=1418174860_b639d703a79fecadc2ef5827b8f623a9',
        message: 'Backbone meninada, Backbone ...',
        owner: true
      },
      { name: 'Palmer Oliveira',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/expalmer/128.jpg',
        message: 'E agora ? Quem está com a razão ?',
        owner: false
      }
    ]
  },
  {
    name: 'Palmer Oliveira',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/expalmer/128.jpg',
    notifications: 0,
    last: {
      name: 'Palmer Olivera',
      message: 'E agora ? Quem está com a razão ?'
    },
    active: false,
    messages: [
      { name: 'Pedro Nauck',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/1779251_670751156305145_372080654_n.jpg?oh=d86fd603d48559fb6257c643aff82ab4&oe=54CBA8CF&__gda__=1422197598_96c18deb03efbff366da9b0d332dc8df',
        message: 'Pra mim React é o melhor!',
        owner: false
      },
      { name: 'Vitor Britto',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c1.22.541.541/s160x160/10455237_10203035256821180_4437426707355918472_n.jpg?oh=02b8cd51edc834d30df7deec8b70df44&oe=5483A1F1&__gda__=1418753818_320fcab9d84a539ab36f2a746c9b4d54',
        message: 'Não concordo! Estou desenvolvendo outra solução',
        owner: false
      },
      { name: 'Suissa',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10678627_10152664593828895_4163476099707638705_n.jpg?oh=b07ef3dc172965a2d5599b880c715cde&oe=5488CF8A&__gda__=1418383199_45ef8bd8f152a13990247d1b25035346',
        message: 'Ah para galera! Todo mundo sabe que o futuro é Coffee Script',
        owner: false
      },
      { name: 'Ju Gonçalves',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.160.160/p160x160/10525577_913475938679393_6396725719215298799_n.jpg?oh=d9f8eabfd584ac697bd7746702edb15c&oe=548E90D2&__gda__=1418692396_934e599654453bf97f15b7cab52dc4e5',
        message: 'Ixi rapazes! Melhor mesmo é JS puro',
        owner: false
      },
      { name: 'Sérgio Rafael Siqueira',
        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.0.160.160/p160x160/10312452_10202976250182212_5918676067838931494_n.jpg?oh=2ef2e25e639c898bc2c2898cd9fa77b9&oe=54CE26DA&__gda__=1418174860_b639d703a79fecadc2ef5827b8f623a9',
        message: 'Backbone meninada, Backbone ...',
        owner: false
      },
      { name: 'Palmer Oliveira',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/expalmer/128.jpg',
        message: 'E agora ? Quem está com a razão ?',
        owner: true
      }
    ]
  }
];

var avatar = [
  'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/expalmer/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mizko/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/teleject/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/alexcican/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/brajeshwar/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/syswarren/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/dotmariusz/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/stylecampaign/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/killnicole/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/koridhandy/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/awelfle/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/jennyshen/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/claynewton/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ricardodezoete/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/juanpablob/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/kyleturman/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/petermcconville/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/rachelreveley/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/subtik/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mbilalsiddique1/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/alyssalowww/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/renettarenula/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/jmsteely/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/uxpiper/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/nataliapery/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/nataliapery/128.jpg'
];

module.exports = {
  users  : users,
  avatar : avatar
};