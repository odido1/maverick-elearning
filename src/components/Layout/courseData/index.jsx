// src/data/courseData.js
export const courseModules = {
    malaria: [
      { id: 'module-1', name: 'Introduction to Malaria' },
      { id: 'module-2', name: 'Malaria Transmission' },
      { id: 'module-3', name: 'Malaria Prevention Strategies' },
      { id: 'module-4', name: 'Malaria Testing and Treatment' },
      { id: 'module-5', name: 'Community Engagement for Malaria' },
      { id: 'module-6', name: 'Global Malaria Initiatives' }
    ],
    hiv: [
      { id: 'module-1', name: 'HIV Basics and Epidemiology' },
      { id: 'module-2', name: 'HIV Transmission and Risk Factors' },
      { id: 'module-3', name: 'HIV Prevention Methods' },
      { id: 'module-4', name: 'HIV Testing and Antiretroviral Therapy' },
      { id: 'module-5', name: 'HIV Stigma and Discrimination' },
      { id: 'module-6', name: 'HIV Advocacy and Support' }
    ],
    tuberculosis: [
      { id: 'module-1', name: 'TB Fundamentals' },
      { id: 'module-2', name: 'TB Transmission and Infection' },
      { id: 'module-3', name: 'TB Prevention Measures' },
      { id: 'module-4', name: 'TB Diagnosis and Treatment Protocols' },
      { id: 'module-5', name: 'TB and Social Determinants of Health' },
      { id: 'module-6', name: 'TB Control Programs' }
    ],
    'substance-abuse': [
      { id: 'module-1', name: 'Understanding Substance Use Disorders' },
      { id: 'module-2', name: 'Biological and Social Factors' },
      { id: 'module-3', name: 'Prevention of Substance Abuse' },
      { id: 'module-4', name: 'Screening and Treatment Approaches' },
      { id: 'module-5', name: 'Recovery and Harm Reduction' },
      { id: 'module-6', name: 'Community-Based Interventions' }
    ],
    polio: [
      { id: 'module-1', name: 'Polio Virus and Disease' },
      { id: 'module-2', name: 'Symptoms & Diagnosis' },
      { id: 'module-3', name: 'Polio Prevention & Vaccination' },
      { id: 'module-4', name: 'Treatment & Rehabilitation' },
      { id: 'module-5', name: 'Advocacy & Community Action' },
      { id: 'module-6', name: 'Post-Eradication Considerations' }
    ]
  };
  
  export const courses = [
    { name: 'Malaria', path: 'malaria' },
    { name: 'HIV', path: 'hiv' },
    { name: 'Tuberculosis', path: 'tuberculosis' },
    { name: 'Substance Abuse', path: 'substance-abuse' },
    { name: 'Polio', path: 'polio' }
  ];
  
  // Sample progress data (in a real app, this would come from an API/database)
  export const userProgress = {
    'malaria': {
      'module-1': true,
      'module-2': true,
      'module-3': false,
      'module-4': false,
      'module-5': false,
      'module-6': false
    },
    'hiv': {
      'module-1': true,
      'module-2': true,
      'module-3': true,
      'module-4': false,
      'module-5': false,
      'module-6': false
    },
    'tuberculosis': {
      'module-1': false,
      'module-2': false,
      'module-3': false,
      'module-4': false,
      'module-5': false,
      'module-6': false
    },
    'substance-abuse': {
      'module-1': true,
      'module-2': false,
      'module-3': false,
      'module-4': false,
      'module-5': false,
      'module-6': false
    },
    'polio': {
      'module-1': false,
      'module-2': false,
      'module-3': false,
      'module-4': false,
      'module-5': false,
      'module-6': false
    }
  };
  
  // Function to calculate course completion percentage
  export const getCourseCompletionPercent = (coursePath) => {
    if (!userProgress[coursePath]) return 0;
    
    const moduleCount = Object.keys(userProgress[coursePath]).length;
    const completedCount = Object.values(userProgress[coursePath]).filter(status => status).length;
    
    return Math.round((completedCount / moduleCount) * 100);
  };