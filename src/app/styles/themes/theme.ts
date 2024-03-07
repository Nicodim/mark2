export interface Theme {
  background: {
    bgColor: string
    invertedBgColor: string
  }
  colors: {
    primaryColor: string
    secondaryColor: string
    invertedPrimaryColor: string
    invertedSecondaryColor: string
  }
  redesigned: {
    darkBgRedesigned: string
    bgRedesigned: string
    lightBgRedesigned: string
    textRedesigned: string
    hintRedesigned: string
    cancelRedesigned: string
    saveRedesigned: string
    iconRedesigned: string
    accentRedesigned: string
  }
  skeleton: {
    skeletonColor: string
    skeletonShadow: string
  }
}

export const themeLight: Theme = {
  background: {
    bgColor: '#e8e8ea',
    invertedBgColor: '#090949'
  },
  colors: {
    primaryColor: '#0232c2',
    secondaryColor: '#0449e0',
    invertedPrimaryColor: '#04ff04',
    invertedSecondaryColor: '#049604'
  },
  redesigned: {
    darkBgRedesigned: '#fff',
    bgRedesigned: '#eff5f6',
    lightBgRedesigned: '#e2eef1',
    textRedesigned: '#141c1f',
    hintRedesigned: '#adbcc0',
    cancelRedesigned: '#f77',
    saveRedesigned: '#62de85',
    iconRedesigned: '#5ed3f3',
    accentRedesigned: '#00c8ff'
  },
  skeleton: {
    skeletonColor: '#fff',
    skeletonShadow: 'rgba(0 0 0 / 20%)'
  }
}

export const themeDark: Theme = {
  background: {
    bgColor: '#090949',
    invertedBgColor: '#e8e8ea'
  },
  colors: {
    primaryColor: '#04ff04',
    secondaryColor: '#049604',
    invertedPrimaryColor: '#0232c2',
    invertedSecondaryColor: '#0452ff'
  },
  redesigned: {
    darkBgRedesigned: '#090f11',
    bgRedesigned: '#0c1214',
    lightBgRedesigned: '#151c1f',
    textRedesigned: '#dbdbdb',
    hintRedesigned: '#555',
    cancelRedesigned: '#d95757',
    saveRedesigned: '#6cd98b',
    iconRedesigned: '#74a2b2',
    accentRedesigned: '#5ed3f3'
  },
  skeleton: {
    skeletonColor: '#1515ad',
    skeletonShadow: '#2b2be8'
  }
// primary-color: #04ff04;
// secondary-color: #049604;
// inverted-primary-color: #0232c2;
// inverted-secondary-color: #0452ff;
}

// .app_dark_theme {
//     --bg-color: #090949;
//     --inverted-bg-color: #e8e8ea;
//     --primary-color: #04ff04;
//     --secondary-color: #049604;
//     --inverted-primary-color: #0232c2;
//     --inverted-secondary-color: #0452ff;
//
//     // redesigned
//     --dark-bg-redesigned: #090f11;
//     --bg-redesigned: #0c1214;
//     --light-bg-redesigned: #151c1f;
//     --text-redesigned: #dbdbdb;
//     --hint-redesigned: #555;
//     --cancel-redesigned: #d95757;
//     --save-redesigned: #6cd98b;
//     --icon-redesigned: #74a2b2;
//     --accent-redesigned: #5ed3f3;
//
//     // skeleton
//     --skeleton-color: #1515ad;
//     --skeleton-shadow: #2b2be8;
//
//     // code
//     --code-bg: #1212a1;
//
//     // card
//     --card-bg: #0d0d6b;
//
//     // listbox
//     --listbox-bg: #0d0d6b;
// }
