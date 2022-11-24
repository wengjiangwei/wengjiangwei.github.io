---
title: "A CNN-Based Born-Again TSK Fuzzy Classifier Integrating Soft Label Information and Knowledge Distillation"
collection: publications
permalink: /publication/CNNBaTSK
excerpt: 'This paper proposes a CNN-based born-again Takagi-Sugeno-Kang (TSK) fuzzy classifier denoted as CNNBaTSK.'
date: 2022-10-19
venue: 'IEEE TFS'
paperurl: 'https://ieeexplore.ieee.org/document/9925120'
citation: 'Y. Jiang, J. Weng, X. Zhang, Z. Yang and W. Hu, "A CNN-Based Born-Again TSK Fuzzy Classifier Integrating Soft Label Information and Knowledge Distillation," in IEEE Transactions on Fuzzy Systems, 2022, doi: 10.1109/TFUZZ.2022.3215566.'
---
This paper proposes a CNN-based born-again Takagi-Sugeno-Kang (TSK) fuzzy classifier denoted as CNNBaTSK. CNNBaTSK achieves the following distinctive characteristics: 1) CNNBaTSK provides a new perspective of knowledge distillation with a non-iterative learning method (least learning machine with knowledge distillation, LLM-KD) to solve the consequent parameters of fuzzy rule, where consequent parameters are trained jointly on the ground-truth label loss, knowledge distillation loss, and regularization term; 2) with the inherent advantage of the fuzzy rule, CNNBaTSK has the capability to express the dark knowledge acquired from the CNN in an interpretable manner. Specifically, the dark knowledge (soft label information) is partitioned into five fixed antecedent fuzzy spaces. The centers of each soft label information in different fuzzy rules are {0, 0.25, 0.5, 0.75, 1}, which may have corresponding linguistic explanations: { very low, low, medium, high, very high }. For the consequent part of the fuzzy rule, the original features are employed to train the consequent parameters that ensure the direct interpretability in the original feature space. The experimental results on the benchmark datasets and the CHB-MIT EEG dataset demonstrate that CNNBaTSK can simultaneously improve the classification performance and model interpretability.

[Download paper here](http://wengjiangwei.github.io/files/CNNBaTSK.pdf)

Recommended citation: Y. Jiang, J. Weng, X. Zhang, Z. Yang and W. Hu, "A CNN-Based Born-Again TSK Fuzzy Classifier Integrating Soft Label Information and Knowledge Distillation," in IEEE Transactions on Fuzzy Systems, 2022, doi: 10.1109/TFUZZ.2022.3215566.