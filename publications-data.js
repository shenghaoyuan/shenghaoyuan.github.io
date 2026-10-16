// Single source for the full Publications page and the three homepage selections.
// Set featured to 1, 2, or 3 to choose the homepage papers; use null for other papers.
// Template strings use normal JavaScript escaping: write \\ for a literal BibTeX backslash.
window.sitePublications = {
  legendHtml: "* Corresponding author · <sup>+</sup> Equal contributions",
  papers: [
    {
      id: "ebpf-2026",
      year: 2026,
      featured: null,
      badge: "eBPF",
      title: "Formal Specification of Linux eBPF Instruction Set Architecture in Sail",
      titleHref: "publications/eBPF2026.pdf",
      authorsHtml: "Yazhou Tang, <strong>Shenghao Yuan*</strong>, Jean-Pierre Talpin, Mingshuai Chen*",
      venueHtml: "4th Workshop on eBPF and Kernel Extensions, 2026 <span class=\"paper-classification\">(CCF-None)</span>",
      thumbnail: {
        src: "img/publications/ebpf-2026.png",
        alt: "First page of Formal Specification of Linux eBPF Instruction Set Architecture in Sail",
        width: 320,
        height: 415,
        href: "publications/eBPF2026.pdf",
        ariaLabel: "Read PDF: Formal Specification of Linux eBPF Instruction Set Architecture in Sail"
      },
      links: [
        {
          label: "PDF",
          href: "publications/eBPF2026.pdf",
          ariaLabel: "PDF: Formal Specification of Linux eBPF Instruction Set Architecture in Sail",
          className: "button-link"
        },
        {
          label: "DOI",
          href: "https://doi.org/10.1145/3837779.3838167",
          ariaLabel: "DOI: Formal Specification of Linux eBPF Instruction Set Architecture in Sail",
          className: "button-link"
        },
        {
          label: "Code",
          href: "https://github.com/OpenSourceVerif/sail-ebpf/tree/ebpf26-artifact",
          ariaLabel: "Code: Formal Specification of Linux eBPF Instruction Set Architecture in Sail",
          className: "button-link paper-code"
        }
      ],
      details: [
        {
          id: "ebpf-2026-abstract",
          label: "Abstract",
          html: "<p>eBPF has become a widely used mechanism for extending the Linux kernel, and recent standardization efforts resulted in RFC 9669, the first eBPF ISA standard. However, eBPF still lacks a formal ISA reference that is both executable and presented as an ISA-style document. This paper presents a Sail formalization covering all 153 sequential instructions in the Linux 7.1 eBPF interpreter. For the remaining 28 atomic instructions, it defines encodings, register effects, and memory-effect annotations, but not a concurrent memory semantics. From the same Sail source, we generate a human-readable formal specification document and Rocq definitions. We also provide a handwritten Rocq execution layer consisting of a Rocq driver and a CompCert-backed runtime to execute the generated definitions.</p>"
        },
        {
          id: "ebpf-2026-bibtex",
          label: "BibTeX",
          html: `<pre><code>@inproceedings{ebpf-2026,
author = {Tang, Yazhou and Yuan, Shenghao and Talpin, Jean-Pierre and Chen, Mingshuai},
title = {Formal Specification of Linux eBPF Instruction Set Architecture in Sail},
year = {2026},
isbn = {9798400729119},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3837779.3838167},
doi = {10.1145/3837779.3838167},
booktitle = {Proceedings of the 4th Workshop on EBPF and Kernel Extensions},
pages = {26–32},
numpages = {7},
location = {Prague, Czech Republic},
series = {eBPF'26}
}</code></pre>`
        }
      ]
    },
    {
      id: "oopsla-2026",
      year: 2026,
      featured: 1,
      badge: "OOPSLA",
      title: "Formalizing the Linux eBPF Core ISA: A Mechanized Operational Semantics and Its Real-World Applications",
      titleHref: "publications/OOPSLA2026.pdf",
      authorsHtml: "<strong>Shenghao Yuan</strong><sup>+</sup>, Yazhou Tang<sup>+</sup>, Tianci Cao, Frédéric Besson, Jean-Pierre Talpin, Mingshuai Chen*",
      venueHtml: "ACM SIGPLAN International Conference on Object-Oriented Programming Systems, Languages, and Applications, 2026 <span class=\"paper-classification\">(CCF-A conf)</span>",
      thumbnail: {
        src: "img/publications/oopsla-2026.png",
        alt: "First page of Formalizing the Linux eBPF Core ISA: A Mechanized Operational Semantics and Its Real-World Applications",
        width: 320,
        height: 475,
        href: "publications/OOPSLA2026.pdf",
        ariaLabel: "Read PDF: Formalizing the Linux eBPF Core ISA: A Mechanized Operational Semantics and Its Real-World Applications"
      },
      links: [
        {
          label: "PDF",
          href: "publications/OOPSLA2026.pdf",
          ariaLabel: "PDF: Formalizing the Linux eBPF Core ISA",
          className: "button-link"
        },
        {
          label: "Code",
          href: "https://github.com/OpenSourceVerif/linux-ebpf-semantics/tree/oopsla26-artifact",
          ariaLabel: "Code: Formalizing the Linux eBPF Core ISA: A Mechanized Operational Semantics and Its Real-World Applications",
          className: "button-link paper-code"
        }
      ],
      details: [
        {
          id: "oopsla-2026-abstract",
          label: "Abstract",
          html: "<p>This paper presents a mechanized formal semantics for the Linux eBPF instruction set architecture (ISA). We develop a small-step semantics in Rocq that faithfully formalizes all 160 sequential in-kernel instructions of the eBPF ISA. The semantics is fully executable and has been validated against the official Linux eBPF test suite. This extensive testing revealed inconsistencies in our original formalization. Using this semantics, we have designed, implemented, and verified the soundness of the bit-level abstract domain employed by the Linux eBPF verifier. Our semantics also complements the existing Linux eBPF documentation by providing a rigorous formal specification. During the formalization process, we have discovered previously unknown bugs in the Linux eBPF implementation, and developed new verifier optimizations; all of these changes have been upstreamed to the latest version of the Linux kernel.</p>"
        },
        {
          id: "oopsla-2026-bibtex",
          label: "BibTeX",
          html: `<pre><code>@article{oopsla-2026,
author = {Yuan, Shenghao and Tang, Yazhou and Cao, Tianci and Besson, Fr{\\'e}d{\\'e}ric and Talpin, Jean-Pierre and Chen, Mingshuai},
title = {Formalizing the Linux eBPF Core ISA: A Mechanized Operational Semantics and Its Real-World Applications},
year = {2026},
issue_date = {October 2026},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {10},
number = {OOPSLA2},
url = {https://doi.org/10.1145/3839449},
doi = {10.1145/3839449},
journal = {Proc. ACM Program. Lang.},
month = oct,
articleno = {317},
numpages = {29}
}</code></pre>`
        }
      ]
    },
    {
      id: "bcra-2026",
      year: 2026,
      featured: null,
      badge: "BCRA",
      title: "A RISC-V JIT Backend for Solana eBPF: Enabling Multi-Architecture Deployment of Blockchain Virtual Machines",
      titleHref: "publications/BCRA2026.pdf",
      authorsHtml: "Jun Liu, Jiayi Lu, <strong>Shenghao Yuan*</strong>, David Sanan, Yongwang Zhao*",
      venueHtml: "Journal of Blockchain: Research and Applications, 2026 <span class=\"paper-classification\">(CCF-B journal)</span>",
      thumbnail: {
        src: "img/publications/bcra-2026.png",
        alt: "First page of A RISC-V JIT Backend for Solana eBPF: Enabling Multi-Architecture Deployment of Blockchain Virtual Machines",
        width: 320,
        height: 415,
        href: "publications/BCRA2026.pdf",
        ariaLabel: "Read PDF: A RISC-V JIT Backend for Solana eBPF: Enabling Multi-Architecture Deployment of Blockchain Virtual Machines"
      },
      links: [
        {
          label: "PDF",
          href: "publications/BCRA2026.pdf",
          ariaLabel: "PDF: A RISC-V JIT Backend for Solana eBPF",
          className: "button-link"
        },
        {
          label: "Code",
          href: "https://github.com/OpenSourceVerif/Solana-Multi-JITs/tree/riscv",
          ariaLabel: "Code: A RISC-V JIT Backend for Solana eBPF: Enabling Multi-Architecture Deployment of Blockchain Virtual Machines",
          className: "button-link paper-code"
        }
      ],
      details: [
        {
          id: "bcra-2026-abstract",
          label: "Abstract",
          html: "<p>The Solana blockchain is known for its high throughput and low latency, and Solana eBPF (SBPF) virtual machine plays a critical role in efficient smart-contract execution and transaction validation. However, the existing SBPF Just-In-Time (JIT) backend is limited to x86-64, restricting deployment on emerging open instruction-set platforms. For a decentralized blockchain system, multi-architecture support reduces hardware dependence and enables more decentralized deployment. To address this limitation, this paper presents a RISC-V JIT backend for SBPF and reorganizes the JIT implementation to better support multi-ISA deployment of blockchain execution. We show how a sandboxed blockchain virtual machine can be retargeted to an open instruction-set architecture while preserving its required execution behaviors and runtime safety guarantees. We implement the new RISC-V backend within the SBPF execution framework and evaluate it using the official Solana test suite and benchmark set. Experiments show that our new backend is functionally correct and competitive in runtime performance. This work was conducted in collaboration with the official Solana development team. During the collaboration, we successfully identified three JIT inefficiencies, all of which have been confirmed and merged into the official Solana codebase.</p>"
        },
        {
          id: "bcra-2026-bibtex",
          label: "BibTeX",
          html: `<pre><code>@article{bcra-2026,
  title = {{A RISC-V JIT Backend for Solana eBPF: Enabling Multi-Architecture Deployment of Blockchain Virtual Machines}},
  author = {Liu, Jun and Lu, Jiayi and Yuan, Shenghao and Sanan, David and Zhao, Yongwang},
  journal = {Journal of Blockchain: Research and Applications},
  year = {2026}
}</code></pre>`
        }
      ]
    },
    {
      id: "oopsla-2025",
      year: 2025,
      featured: 2,
      badge: "OOPSLA",
      title: "A complete formal semantics of eBPF instruction set architecture for Solana",
      titleHref: "https://dl.acm.org/doi/10.1145/3720414",
      authorsHtml: "<strong>Shenghao Yuan</strong>, Zhuoruo Zhang, Jiayi Lu, David Sanan, Rui Chang, Yongwang Zhao*",
      venueHtml: "ACM SIGPLAN International Conference on Object-Oriented Programming Systems, Languages, and Applications, 2025 <span class=\"paper-classification\">(CCF-A conf)</span>",
      thumbnail: {
        src: "img/publications/oopsla-2025.png",
        alt: "First page of A complete formal semantics of eBPF instruction set architecture for Solana",
        width: 320,
        height: 415,
        href: "publications/OOPSLA25.pdf",
        ariaLabel: "Read PDF: A complete formal semantics of eBPF instruction set architecture for Solana"
      },
      links: [
        {
          label: "PDF",
          href: "publications/OOPSLA25.pdf",
          ariaLabel: "PDF: A complete formal semantics of eBPF instruction set architecture for Solana",
          className: "button-link"
        },
        {
          label: "DOI",
          href: "https://dl.acm.org/doi/10.1145/3720414",
          ariaLabel: "DOI: A complete formal semantics of eBPF instruction set architecture for Solana",
          className: "button-link"
        },
        {
          label: "Code",
          href: "https://github.com/OpenSourceVerif/CertSBF/tree/oopsla25-ae",
          ariaLabel: "Code: A complete formal semantics of eBPF instruction set architecture for Solana",
          className: "button-link paper-code"
        }
      ],
      details: [
        {
          id: "oopsla-2025-abstract",
          label: "Abstract",
          html: "<p>We present the first and most comprehensive formal semantics for the Solana eBPF bytecode language used in smart contracts on the Solana blockchain platform. Our formalization accurately captures all binary-level instructions of the Solana eBPF instruction set architecture. This semantics is structured in a small-step style, facilitating the formalization of the Solana eBPF interpreter within Isabelle/HOL. We provide a semantics validation framework that extracts an executable semantics from our formalization to test against the original implementation of the Solana eBPF interpreter. This approach introduces a novel lightweight and non-invasive method to relax the limitations of the existing Isabelle/HOL extraction mechanism. Furthermore, we illustrate potential applications of our semantics in the formalization of the main components of the Solana eBPF virtual machine.</p>"
        },
        {
          id: "oopsla-2025-bibtex",
          label: "BibTeX",
          html: `<pre><code>@article{oopsla-2025,
author = {Yuan, Shenghao and Zhang, Zhuoruo and Lu, Jiayi and Sanan, David and Chang, Rui and Zhao, Yongwang},
title = {A Complete Formal Semantics of eBPF Instruction Set Architecture for Solana},
year = {2025},
issue_date = {April 2025},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {9},
number = {OOPSLA1},
url = {https://doi.org/10.1145/3720414},
doi = {10.1145/3720414},
journal = {Proc. ACM Program. Lang.},
month = apr,
articleno = {80},
numpages = {27}
}</code></pre>`
        }
      ]
    },
    {
      id: "setta-2024",
      year: 2024,
      featured: null,
      badge: "SETTA",
      title: "Formalizing x86-64 ISA in Isabelle/HOL: A Binary Semantics for eBPF JIT Correctness",
      titleHref: "https://link.springer.com/chapter/10.1007/978-981-96-0602-3_11",
      authorsHtml: "Jiayi Lu, <strong>Shenghao Yuan*</strong>, David Sanan, Yongwang Zhao",
      venueHtml: "10th Symposium on Dependable Software Engineering: Theories, Tools and Applications, 2024 <span class=\"paper-classification\">(CCF-C conf)</span>",
      thumbnail: {
        src: "img/publications/setta-2024.png",
        alt: "First page of Formalizing x86-64 ISA in Isabelle/HOL: A Binary Semantics for eBPF JIT Correctness",
        width: 320,
        height: 415,
        href: "publications/SETTA24.pdf",
        ariaLabel: "Read PDF: Formalizing x86-64 ISA in Isabelle/HOL: A Binary Semantics for eBPF JIT Correctness"
      },
      links: [
        {
          label: "PDF",
          href: "publications/SETTA24.pdf",
          ariaLabel: "PDF: Formalizing x86-64 ISA in Isabelle/HOL",
          className: "button-link"
        },
        {
          label: "DOI",
          href: "https://link.springer.com/chapter/10.1007/978-981-96-0602-3_11",
          ariaLabel: "DOI: Formalizing x86-64 ISA in Isabelle/HOL",
          className: "button-link"
        },
        {
          label: "Code",
          href: "https://github.com/shenghaoyuan/Solana-x64-Semantics",
          ariaLabel: "Code: Formalizing x86-64 ISA in Isabelle/HOL: A Binary Semantics for eBPF JIT Correctness",
          className: "button-link paper-code"
        }
      ],
      details: [
        {
          id: "setta-2024-abstract",
          label: "Abstract",
          html: "<p>Binary semantics forms a critical infrastructure for proving the correctness of Just-In-Time (JIT) compilation, an advanced technique to optimize runtime execution by translating the source bytecode of a program into target machine code. This paper presents a formal model of x86-64 binary semantics in Isabelle/HOL, as the foundation to verify the eBPF x86-64 JIT correctness for the Solana blockchain. First, we formalize a significant subset of x86-64 semantics, covering all the x86-64 instructions used in the Solana JIT. Second, we develop an encoder and decoder to establish a precise bidirectional mapping between assembly and binary code. Furthermore, we demonstrate the equivalence property of the x86-64 encoder-decoder pair, significantly simplifying the correctness proof of the Solana JIT compiler verification.</p>"
        },
        {
          id: "setta-2024-bibtex",
          label: "BibTeX",
          html: `<pre><code>@inproceedings{setta-2024,
author = {Lu, Jiayi and Yuan, Shenghao and Sanan, David and Zhao, Yongwang},
title = {Formalizing x86-64 ISA in&nbsp;Isabelle/HOL:&nbsp;A Binary Semantics for&nbsp;eBPF JIT Correctness},
year = {2024},
isbn = {978-981-96-0601-6},
publisher = {Springer-Verlag},
address = {Berlin, Heidelberg},
url = {https://doi.org/10.1007/978-981-96-0602-3_11},
doi = {10.1007/978-981-96-0602-3_11},
booktitle = {Dependable Software Engineering. Theories, Tools, and Applications: 10th International Symposium, SETTA 2024, Hong Kong, China, November 26–28, 2024, Proceedings},
pages = {197–216},
numpages = {20}
}</code></pre>`
        },
        {
          id: "setta-2024-follow-up",
          label: "Follow-up",
          html: "<p>This work supports <a href=\"#oopsla-2025\">OOPSLA '25</a>.</p>"
        }
      ]
    },
    {
      id: "cav-2024",
      year: 2024,
      featured: 3,
      badge: "CAV",
      title: "End-to-end Mechanized Proof of a JIT-accelerated eBPF Virtual Machine for IoT",
      titleHref: "https://link.springer.com/chapter/10.1007/978-3-031-65627-9_16",
      authorsHtml: "<strong>Shenghao Yuan*</strong>, Frédéric Besson, Jean-Pierre Talpin",
      venueHtml: "36th International Conference on Computer-Aided Verification, 2024 <span class=\"paper-classification\">(CCF-A conf)</span>",
      thumbnail: {
        src: "img/publications/cav-2024.png",
        alt: "First page of End-to-end Mechanized Proof of a JIT-accelerated eBPF Virtual Machine for IoT",
        width: 320,
        height: 415,
        href: "publications/CAV2024.pdf",
        ariaLabel: "Read PDF: End-to-end Mechanized Proof of a JIT-accelerated eBPF Virtual Machine for IoT"
      },
      links: [
        {
          label: "PDF",
          href: "publications/CAV2024.pdf",
          ariaLabel: "PDF: End-to-end Mechanized Proof of a JIT-accelerated eBPF Virtual Machine for IoT",
          className: "button-link"
        },
        {
          label: "DOI",
          href: "https://link.springer.com/chapter/10.1007/978-3-031-65627-9_16",
          ariaLabel: "DOI: End-to-end Mechanized Proof of a JIT-accelerated eBPF Virtual Machine for IoT",
          className: "button-link"
        },
        {
          label: "Code",
          href: "https://gitlab.inria.fr/shyuan/certrbpf-jit/-/tree/CAV24-AE",
          ariaLabel: "Code: End-to-end Mechanized Proof of a JIT-accelerated eBPF Virtual Machine for IoT",
          className: "button-link paper-code"
        }
      ],
      details: [
        {
          id: "cav-2024-abstract",
          label: "Abstract",
          html: "<p>Modern operating systems have adopted Berkeley Packet Filters (BPF) as a mechanism to extend kernel functionalities dynamically, e.g., Linux’s eBPF or RIOT’s rBPF. The just-in-time (JIT) compilation of eBPF introduced in Linux eBPF for performance has however led to numerous critical issues. Instead, RIOT’s rBPF uses a slower but memory-isolating interpreter (a virtual machine) that implements a defensive semantics of BPF but can hardly translate to compact JITed code. To address this problem, this paper presents a fully verified JIT implementation for RIOT’s rBPF, consisting of: i/ an end-to-end co-verification workflow to both proving the JIT correct from an abstract specification and by deriving a verified concrete C implementation; ii/ a symbolic CompCert interpreter for executing jited binary code; iii/ a verified JIT compiler for rBPF; iv/ a verified hybrid rBPF virtual machine. Our core contribution is, to the best of our knowledge, the first and fully verified rBPF JIT compiler with correctness guarantees from high-level specification to low-level implementation. Benchmarks on microcontrollers hosting the RIOT operating system demonstrate significant performance improvements over the existing implementations of rBPF, even in worst-case application scenarios.</p>"
        },
        {
          id: "cav-2024-bibtex",
          label: "BibTeX",
          html: `<pre><code>@inproceedings{cav-2024,
author = {Yuan, Shenghao and Besson, Fr{\\'e}d{\\'e}ric and Talpin, Jean-Pierre},
title = {End-to-End Mechanized Proof of&nbsp;a&nbsp;JIT-Accelerated eBPF Virtual Machine for&nbsp;IoT},
year = {2024},
isbn = {978-3-031-65626-2},
publisher = {Springer-Verlag},
address = {Berlin, Heidelberg},
url = {https://doi.org/10.1007/978-3-031-65627-9_16},
doi = {10.1007/978-3-031-65627-9_16},
booktitle = {Computer Aided Verification: 36th International Conference, CAV 2024, Montreal, QC, Canada, July 24–27, 2024, Proceedings, Part I},
pages = {325–347},
numpages = {23}
}</code></pre>`
        },
        {
          id: "cav-2024-follow-up",
          label: "Follow-up",
          html: "<p>No progress. I noticed that EVM and Solana are using this hybrid solution, which suggests that a fully JIT-compiled approach may not be strictly necessary. This was my final work during my Ph.D. Afterward, I shifted my focus to Solana and Linux eBPF; see <a href=\"#oopsla-2025\">OOPSLA '25</a> and <a href=\"#oopsla-2026\">OOPSLA '26</a>.</p>"
        }
      ]
    },
    {
      id: "setta-2023",
      year: 2023,
      featured: null,
      badge: "SETTA",
      title: "Making an eBPF Virtual Machine Faster on Microcontrollers: Verified Optimization and Proof Simplification",
      titleHref: "https://link.springer.com/chapter/10.1007/978-981-99-8664-4_22",
      authorsHtml: "<strong>Shenghao Yuan*</strong>, Benjamin Lion, Frédéric Besson, Jean-Pierre Talpin",
      venueHtml: "9th Symposium on Dependable Software Engineering: Theories, Tools and Applications, 2023 <span class=\"paper-classification\">(CCF-C conf)</span>",
      thumbnail: {
        src: "img/publications/setta-2023.png",
        alt: "First page of Making an eBPF Virtual Machine Faster on Microcontrollers: Verified Optimization and Proof Simplification",
        width: 320,
        height: 415,
        href: "publications/SETTA23_draft.pdf",
        ariaLabel: "Read PDF: Making an eBPF Virtual Machine Faster on Microcontrollers: Verified Optimization and Proof Simplification"
      },
      links: [
        {
          label: "PDF",
          href: "publications/SETTA23_draft.pdf",
          ariaLabel: "PDF: Making an eBPF Virtual Machine Faster on Microcontrollers",
          className: "button-link"
        },
        {
          label: "DOI",
          href: "https://link.springer.com/chapter/10.1007/978-981-99-8664-4_22",
          ariaLabel: "DOI: Making an eBPF Virtual Machine Faster on Microcontrollers",
          className: "button-link"
        },
        {
          label: "Code",
          href: "https://gitlab.inria.fr/shyuan/certrbpfopt",
          ariaLabel: "Code: Making an eBPF Virtual Machine Faster on Microcontrollers: Verified Optimization and Proof Simplification",
          className: "button-link paper-code"
        }
      ],
      details: [
        {
          id: "setta-2023-abstract",
          label: "Abstract",
          html: "<p>As a revolutionary kernel extension technology, Berkeley Packet Filters (BPF) has been applied for various operating systems from different domains, from servers (Linux’s extended BPF) to microcontrollers (RIOT-OS rBPF). Previous works have formally proved the memory isolation property for the non-optimized rBPF virtual machine in the Coq proof assistant. In this paper, we introduce a verified optimization for rBPF, and highlight a novel proof approach for optimization correctness: a simplification process is first used to transform monadic models with option state to simplified non-monadic models with inline arguments; then the optimization correctness theorem splits into i) proving simplification correct and ii) proving the optimization correctness on simplified models. Our proof approach enjoys a fruitful proof simplification. Preliminary experiments demonstrate satisfying performance.</p>"
        },
        {
          id: "setta-2023-bibtex",
          label: "BibTeX",
          html: `<pre><code>@inproceedings{setta-2023,
author = {Yuan, Shenghao and Lion, Benjamin and Besson, Fr{\\'e}d{\\'e}ric and Talpin, Jean-Pierre},
title = {Making an&nbsp;eBPF Virtual Machine Faster on&nbsp;Microcontrollers: Verified Optimization and&nbsp;Proof Simplification},
year = {2023},
isbn = {978-981-99-8663-7},
publisher = {Springer-Verlag},
address = {Berlin, Heidelberg},
url = {https://doi.org/10.1007/978-981-99-8664-4_22},
doi = {10.1007/978-981-99-8664-4_22},
booktitle = {Dependable Software Engineering. Theories, Tools, and Applications: 9th International Symposium, SETTA 2023, Nanjing, China, November 27–29, 2023, Proceedings},
pages = {385–401},
numpages = {17}
}</code></pre>`
        },
        {
          id: "setta-2023-follow-up",
          label: "Follow-up",
          html: "<p>No progress. One reason is that LLMs could do something similar to AutoCorres, and I became interested in Rust after my Ph.D.</p>"
        }
      ]
    },
    {
      id: "cav-2022",
      year: 2022,
      featured: null,
      badge: "CAV",
      title: "End-to-end Mechanised Proof of an eBPF Virtual Machine for Microcontrollers",
      titleHref: "https://link.springer.com/chapter/10.1007/978-3-031-13188-2_15",
      authorsHtml: "<strong>Shenghao Yuan*</strong>, Frédéric Besson, Jean-Pierre Talpin, Samuel Hym, Koen Zandberg, Emmanuel Baccelli",
      venueHtml: "34th International Conference on Computer-Aided Verification, 2022 <span class=\"paper-classification\">(CCF-A conf)</span>",
      thumbnail: {
        src: "img/publications/cav-2022.png",
        alt: "First page of End-to-end Mechanised Proof of an eBPF Virtual Machine for Microcontrollers",
        width: 320,
        height: 415,
        href: "publications/CAV2022.pdf",
        ariaLabel: "Read PDF: End-to-end Mechanised Proof of an eBPF Virtual Machine for Microcontrollers"
      },
      links: [
        {
          label: "PDF",
          href: "publications/CAV2022.pdf",
          ariaLabel: "PDF: End-to-end Mechanised Proof of an eBPF Virtual Machine for Microcontrollers",
          className: "button-link"
        },
        {
          label: "DOI",
          href: "https://link.springer.com/chapter/10.1007/978-3-031-13188-2_15",
          ariaLabel: "DOI: End-to-end Mechanised Proof of an eBPF Virtual Machine for Microcontrollers",
          className: "button-link"
        },
        {
          label: "Slides",
          href: "publications/CAV22_0809.pptx",
          ariaLabel: "Slides: End-to-end Mechanised Proof of an eBPF Virtual Machine for Microcontrollers",
          className: "button-link"
        },
        {
          label: "Code",
          href: "https://gitlab.inria.fr/shyuan/rbpf-dx/-/tree/CAV22-AE",
          ariaLabel: "Code: End-to-end Mechanised Proof of an eBPF Virtual Machine for Microcontrollers",
          className: "button-link paper-code"
        }
      ],
      details: [
        {
          id: "cav-2022-abstract",
          label: "Abstract",
          html: "<p>RIOT is a micro-kernel dedicated to IoT applications that adopts eBPF (extended Berkeley Packet Filters) to implement so-called femto-containers. As micro-controllers rarely feature hardware memory protection, the isolation of eBPF virtual machines (VM) is critical to ensure system integrity against potentially malicious programs. This paper shows how to directly derive, within the Coq proof assistant, the verified C implementation of an eBPF virtual machine from a Gallina specification. Leveraging the formal semantics of the CompCert C compiler, we obtain an end-to-end theorem stating that the C code of our VM inherits the safety and security properties of the Gallina specification. Our refinement methodology ensures that the isolation property of the specification holds in the verified C implementation. Preliminary experiments demonstrate satisfying performance.</p>"
        },
        {
          id: "cav-2022-bibtex",
          label: "BibTeX",
          html: `<pre><code>@inproceedings{cav-2022,
author = {Yuan, Shenghao and Besson, Fr{\\'e}d{\\'e}ric and Talpin, Jean-Pierre and Hym, Samuel and Zandberg, Koen and Baccelli, Emmanuel},
title = {End-to-End Mechanized Proof of&nbsp;an&nbsp;eBPF Virtual Machine for&nbsp;Micro-controllers},
year = {2022},
isbn = {978-3-031-13187-5},
publisher = {Springer-Verlag},
address = {Berlin, Heidelberg},
url = {https://doi.org/10.1007/978-3-031-13188-2_15},
doi = {10.1007/978-3-031-13188-2_15},
booktitle = {Computer Aided Verification: 34th International Conference, CAV 2022, Haifa, Israel, August 7–10, 2022, Proceedings, Part II},
pages = {293–316},
numpages = {24}
}</code></pre>`
        },
        {
          id: "cav-2022-follow-up",
          label: "Follow-up",
          html: "<p>Working on verified eBPF JIT; see <a href=\"#cav-2024\">CAV '24</a>.</p>"
        }
      ]
    }
  ]
};
