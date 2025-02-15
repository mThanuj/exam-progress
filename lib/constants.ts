export interface Topic {
  name: string;
  completed: boolean;
}

export interface Unit {
  title: string;
  topics: Topic[];
}

export type SubjectsStructure = Record<string, Unit[]>;

export const SUBJECTS = {
  CC: "Cloud Computing",
  FBA: "Fundamentals of Biomedical Applications",
  WS: "Web Security",
  RL: "Reinforcement Learning",
  NNDL: "Neral Networks and Deep Learning",
};

export const initialUnits: SubjectsStructure = {
  [SUBJECTS.NNDL]: [
    {
      title: "Unit I",
      topics: [
        { name: "Artificial Neural Networks Introduction", completed: false },
        { name: "Basic Models of ANN", completed: false },
        { name: "Important Terminologies", completed: false },
        { name: "Supervised Learning Networks", completed: false },
        { name: "Perceptron Networks", completed: false },
        { name: "Adaptive Linear Neuron (ADALINE)", completed: false },
        { name: "Back-Propagation Network", completed: false },
        { name: "Associative Memory Networks", completed: false },
        {
          name: "Training Algorithms for Pattern Association",
          completed: false,
        },
        { name: "BAM", completed: false },
        { name: "Hopfield Networks", completed: false },
      ],
    },
    {
      title: "Unit II",
      topics: [
        {
          name: "Unsupervised Learning Networks Introduction",
          completed: false,
        },
        { name: "Fixed Weight Competitive Nets", completed: false },
        { name: "Maxnet", completed: false },
        { name: "Hamming Network", completed: false },
        { name: "Kohonen Self-Organizing Feature Maps", completed: false },
        { name: "Learning Vector Quantization", completed: false },
        { name: "Counter Propagation Networks", completed: false },
        { name: "Adaptive Resonance Theory Networks", completed: false },
        { name: "Special Networks Introduction", completed: false },
      ],
    },
    {
      title: "Unit III",
      topics: [
        { name: "Introduction to Deep Learning", completed: false },
        { name: "Historical Trends in Deep Learning", completed: false },
        { name: "Deep Feed-Forward Networks", completed: false },
        { name: "Gradient-Based Learning", completed: false },
        { name: "Hidden Units", completed: false },
        { name: "Architecture Design", completed: false },
        {
          name: "Back-Propagation and Other Differentiation Algorithms",
          completed: false,
        },
      ],
    },
    {
      title: "Unit IV",
      topics: [
        { name: "Parameter Norm Penalties", completed: false },
        {
          name: "Norm Penalties as Constrained Optimization",
          completed: false,
        },
        {
          name: "Regularization and Under-Constrained Problems",
          completed: false,
        },
        { name: "Dataset Augmentation", completed: false },
        { name: "Noise Robustness", completed: false },
        { name: "Semi-Supervised Learning", completed: false },
        { name: "Multi-task Learning", completed: false },
        { name: "Early Stopping", completed: false },
        { name: "Parameter Tying and Parameter Sharing", completed: false },
        { name: "Sparse Representations", completed: false },
        { name: "Bagging and Other Ensemble Methods", completed: false },
        { name: "Dropout", completed: false },
        { name: "Adversarial Training", completed: false },
        { name: "Tangent Distance", completed: false },
        { name: "Tangent Prop and Manifold", completed: false },
        { name: "Tangent Classifier", completed: false },
      ],
    },
    {
      title: "Unit V",
      topics: [
        { name: "Challenges in Neural Network Optimization", completed: false },
        { name: "Basic Algorithms", completed: false },
        { name: "Parameter Initialization Strategies", completed: false },
        { name: "Algorithms with Adaptive Learning Rates", completed: false },
        { name: "Approximate Second-Order Methods", completed: false },
        {
          name: "Optimization Strategies and Meta-Algorithms",
          completed: false,
        },
        { name: "Large-Scale Deep Learning", completed: false },
        { name: "Computer Vision", completed: false },
        { name: "Speech Recognition", completed: false },
        { name: "Natural Language Processing", completed: false },
      ],
    },
  ],
  [SUBJECTS.RL]: [
    {
      title: "Unit I",
      topics: [
        { name: "Basics of probability and linear algebra", completed: false },
        {
          name: "Definition of a stochastic multi-armed bandit",
          completed: false,
        },
        { name: "Definition ofregret", completed: false },
        { name: "Achieving sublinear regret", completed: false },
        { name: "UCB algorithm", completed: false },
        { name: "KL-UCB", completed: false },
        { name: "Thompson Sampling", completed: false },
      ],
    },
    {
      title: "Unit II",
      topics: [
        { name: "Markov Decision Problem", completed: false },
        { name: "Policy and Value function", completed: false },
        {
          name: "Reward models (infinite discounted, total, finitehorizon, and average)",
          completed: false,
        },
        { name: "Episodic & continuing tasks", completed: false },
        { name: "Bellman's optimality operator", completed: false },
        { name: "Value iteration & policy iteration", completed: false },
      ],
    },
    {
      title: "Unit III",
      topics: [
        { name: "The Reinforcement Learning problem", completed: false },
        { name: "prediction and control problems", completed: false },
        { name: "Model-based algorithm", completed: false },
        { name: "MonteCarlo methods for prediction", completed: false },
        {
          name: "Online implementation of Monte Carlo policy evaluation",
          completed: false,
        },
      ],
    },
    {
      title: "Unit IV",
      topics: [
        { name: "Bootstrapping", completed: false },
        { name: "TD(0) algorithm", completed: false },
        {
          name: "Convergence of Monte Carlo and batch TD(0) algorithms",
          completed: false,
        },
        {
          name: "Model-freecontrol: Q-learning, Sarsa, Expected Sarsa",
          completed: false,
        },
      ],
    },
    {
      title: "Unit V",
      topics: [
        { name: "n-step returns", completed: false },
        { name: "TD(λ) algorithm", completed: false },
        { name: "Need for generalization in practice", completed: false },
        {
          name: "Linear function approximation and geometric view",
          completed: false,
        },
        { name: "Linear TD(λ). Tile coding", completed: false },
        { name: "Control with function approximation", completed: false },
        { name: "Policy search", completed: false },
        { name: "Policy gradient methods", completed: false },
        { name: "Experience replay", completed: false },
        { name: "Fitted Q Iteration", completed: false },
        { name: "Case studies", completed: false },
      ],
    },
  ],
  [SUBJECTS.WS]: [
    {
      title: "Unit I",
      topics: [
        { name: "The Web Security", completed: false },
        { name: "The Web Security Problem", completed: false },
        { name: "Risk Analysis and Best Practices", completed: false },
        { name: "Cryptography and Web Security", completed: false },
        {
          name: "Working Cryptographic Systems and Protocols",
          completed: false,
        },
        { name: "Legal Restrictions on Cryptography", completed: false },
        { name: "Digital Identification", completed: false },
      ],
    },
    {
      title: "Unit II",
      topics: [
        { name: "The Web’s War on Your Privacy", completed: false },
        { name: "Privacy-Protecting Techniques", completed: false },
        { name: "Backups and Antitheft", completed: false },
        { name: "Web Server Security", completed: false },
        { name: "Physical Security for Servers", completed: false },
        { name: "Host Security for Servers", completed: false },
        { name: "Securing Web Applications", completed: false },
      ],
    },
    {
      title: "Unit III",
      topics: [
        {
          name: "Recent Advances in Access Control",
          completed: false,
        },
        { name: "Access Control Models for XML", completed: false },
        {
          name: "Database Issues in Trust Management and Trust Negotiation",
          completed: false,
        },
        {
          name: "Security in Data Warehouses and OLAP Systems",
          completed: false,
        },
      ],
    },
    {
      title: "Unit IV",
      topics: [
        {
          name: "Security Re-engineering for Databases: Concepts and Techniques",
          completed: false,
        },
        {
          name: "Database Watermarking for Copyright Protection",
          completed: false,
        },
        { name: "Trustworthy Records Retention", completed: false },
        {
          name: "Damage Quarantine and Recovery in Data Processing Systems",
          completed: false,
        },
        {
          name: "Hippocratic Databases: Current Capabilities and Future Trends",
          completed: false,
        },
      ],
    },
    {
      title: "Unit V",
      topics: [
        {
          name: "Privacy in Database Publishing: A Bayesian Perspective",
          completed: false,
        },
        {
          name: "Privacy-enhanced Location-based Access Control",
          completed: false,
        },
        {
          name: "Efficiently Enforcing the Security and Privacy Policies in a Mobile Environment",
          completed: false,
        },
      ],
    },
  ],
  [SUBJECTS.FBA]: [
    {
      title: "Unit I",
      topics: [
        {
          name: "Components of Medical Instrumentation System",
          completed: false,
        },
        {
          name: "Static and Dynamic Characteristics of medical instruments",
          completed: false,
        },
        {
          name: "Problems encountered with measurements from human beings",
          completed: false,
        },
        {
          name: "Organization of Cell: Derivation of Nernst Equation",
          completed: false,
        },
        {
          name: "Generation of action potential and refractory periods",
          completed: false,
        },
        {
          name: "Propagation methods of action potentials",
          completed: false,
        },
      ],
    },
    {
      title: "Unit II",
      topics: [
        {
          name: "Medical Recorders: Classification of Recorders",
          completed: false,
        },
        {
          name: "Genral features of Ink-Jet",
          completed: false,
        },
        {
          name: "PMMC writing systems",
          completed: false,
        },
        {
          name: "Basics of Bio Cheminal Electrodes",
          completed: false,
        },
        {
          name: "Electrocardiography: Electrical conduction system of heart, electrodes and their placement",
          completed: false,
        },
        {
          name: "Standard 12 - Lead Configurations",
          completed: false,
        },
        {
          name: "Interpretation of ECG waveform with respect to electro-mechanical activity of the heart",
          completed: false,
        },
      ],
    },
    {
      title: "Unit III",
      topics: [
        {
          name: "Blood Pressure Measurement: Introduction to Blood Pressure",
          completed: false,
        },
        {
          name: "Blood Pressure measurement methods",
          completed: false,
        },
        {
          name: "Blood Flow Measurement methods",
          completed: false,
        },
        {
          name: "Phonocardiography",
          completed: false,
        },
      ],
    },
    {
      title: "Unit IV",
      topics: [
        {
          name: "Basics of Pacemakers",
          completed: false,
        },
        {
          name: "Defibrillator",
          completed: false,
        },
        {
          name: "Electrotherapy and its Applications",
          completed: false,
        },
        {
          name: "Dialysis and its Significance",
          completed: false,
        },
      ],
    },
    {
      title: "Unit V",
      topics: [
        {
          name: "EEG Block Diagram, electrodes and their placement",
          completed: false,
        },
        {
          name: "EMG Block Diagram, electrodes and their placement",
          completed: false,
        },
        {
          name: "Study of Neuromuscular Junction",
          completed: false,
        },
        {
          name: "Nerve conduction velocity using EMG",
          completed: false,
        },
        {
          name: "Respiratory Instrumentation: Mechanism of Respiration",
          completed: false,
        },
        {
          name: "Spirometry",
          completed: false,
        },
        {
          name: "Pnemuotachograph and its Types",
          completed: false,
        },
        {
          name: "Ventilators and its Mode of Operation",
          completed: false,
        },
      ],
    },
  ],
  [SUBJECTS.CC]: [
    {
      title: "Unit I",
      topics: [
        { name: "High-Performance Computing", completed: false },
        { name: "Parallel Computing", completed: false },
        { name: "Distributed Computing", completed: false },
        { name: "Cluster Computing", completed: false },
        { name: "Grid Computing", completed: false },
        { name: "Cloud Computing", completed: false },
        { name: "Bio Computing", completed: false },
        { name: "Mobile Computing", completed: false },
        { name: "Quantum Computing", completed: false },
        { name: "Optical Computing", completed: false },
        { name: "Nano Computing", completed: false },
      ],
    },
    {
      title: "Unit II",
      topics: [
        { name: "Motivation for Cloud Computing", completed: false },
        { name: "The Need for Cloud Computing", completed: false },
        { name: "Defining Cloud Computing", completed: false },
        { name: "Definition of Cloud Computing", completed: false },
        { name: "Cloud Computing as a Service", completed: false },
        { name: "Cloud Computing as a Platform", completed: false },
        { name: "Principles of Cloud Computing", completed: false },
        { name: "Five Essential Characteristics", completed: false },
        { name: "Four Cloud Deployment Models", completed: false },
      ],
    },
    {
      title: "Unit III",
      topics: [
        { name: "Cloud Architecture", completed: false },
        { name: "Layer and Anatomy of the Cloud", completed: false },
        { name: "Network Connectivity in Cloud Computing", completed: false },
        { name: "Applications on the Cloud", completed: false },
        { name: "Managing the Cloud", completed: false },
        { name: "Managing the Cloud Infrastructure", completed: false },
        { name: "Managing the Cloud Application", completed: false },
        { name: "Migrating Application to Cloud", completed: false },
        { name: "Phases of Cloud Migration", completed: false },
        { name: "Approaches for Cloud Migration", completed: false },
      ],
    },
    {
      title: "Unit IV",
      topics: [
        { name: "Infrastructure as a Service (IaaS)", completed: false },
        { name: "Characteristics of IaaS", completed: false },
        { name: "Suitability of IaaS", completed: false },
        { name: "Pros and Cons of IaaS", completed: false },
        { name: "Summary of IaaS Providers", completed: false },
        { name: "Platform as a Service (PaaS)", completed: false },
        { name: "Characteristics of PaaS", completed: false },
        { name: "Suitability of PaaS", completed: false },
        { name: "Pros and Cons of PaaS", completed: false },
        { name: "Summary of PaaS Providers", completed: false },
        { name: "Software as a Service (SaaS)", completed: false },
        { name: "Characteristics of SaaS", completed: false },
        { name: "Suitability of SaaS", completed: false },
        { name: "Pros and Cons of SaaS", completed: false },
        { name: "Summary of SaaS Providers", completed: false },
        { name: "Other Cloud Service Models", completed: false },
      ],
    },
    {
      title: "Unit V",
      topics: [
        { name: "Cloud Service Providers", completed: false },
        { name: "EMC, EMC IT", completed: false },
        { name: "Captiva Cloud Toolkit", completed: false },
        { name: "Google Cloud Platform", completed: false },
        { name: "Google Cloud Storage", completed: false },
        { name: "Google Cloud Connect", completed: false },
        { name: "Google Cloud Print", completed: false },
        { name: "Google App Engine", completed: false },
        { name: "Amazon Web Services (AWS)", completed: false },
        { name: "Amazon Elastic Compute Cloud", completed: false },
        { name: "Amazon Simple Storage Service (S3)", completed: false },
        { name: "Amazon Simple Queue Service", completed: false },
        { name: "Microsoft Azure", completed: false },
        { name: "Microsoft Assessment and Planning Toolkit", completed: false },
        { name: "SharePoint", completed: false },
        { name: "IBM Cloud Models", completed: false },
        { name: "IBM Smart Cloud", completed: false },
        { name: "SAP Labs", completed: false },
        { name: "SAP HANA Cloud Platform", completed: false },
        { name: "Virtualization Services by SAP", completed: false },
        { name: "Salesforce", completed: false },
        { name: "Sales Cloud", completed: false },
        { name: "Service Cloud: Knowledge as a Service", completed: false },
        { name: "Rackspace", completed: false },
        { name: "VMware", completed: false },
        { name: "Manjrasoft", completed: false },
        { name: "Aneka Platform", completed: false },
      ],
    },
  ],
};
