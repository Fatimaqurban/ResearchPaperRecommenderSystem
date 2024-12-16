---

# **Automated Research Paper Discovery and Recommendation System**

This project implements an **automated research paper discovery and recommendation system** that leverages **Natural Language Processing (NLP)** techniques and **citation/metadata analysis** to assist researchers in quickly discovering relevant academic papers. The system uses advanced **embedding models**, specifically **Sentence Transformers**, and **FAISS** (Facebook AI Similarity Search) for efficient paper recommendations based on semantic similarity.

## **Features**

- **Citation and Metadata Analysis**: Fetches and analyzes metadata (titles, authors, abstracts, citations) from research papers.
- **Recommendation System**: Recommends related papers based on **semantic similarity** using **Sentence Transformers** (all-MiniLM-L6-v2) for embeddings and **FAISS** for fast similarity searches.
- **Interactive Visualizations**: Provides **t-SNE plots** and **similarity matrices** to visualize relationships between papers.
- **User Input**: Users can input a **DOI** or **title** of a research paper to receive personalized recommendations.
- **Frontend Interface**: Built with **React**, allowing interactive exploration of recommendations and metadata.

## **Technologies Used**
- **Natural Language Processing (NLP)**: Sentence Transformers, FAISS
- **Frontend**: React
- **Machine Learning**: scikit-learn, UMAP
- **Data Visualization**: Plotly, Seaborn
- **Data Source**: DBLP dataset (Kaggle)
- **Libraries**: pandas, NumPy

## **Setup**

1. Clone the repository:
    ```bash
    git clone https://github.com/FatimaQurban/ResearchPaperRecommenderSystem.git
    ```

2. Install required dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. To run the React frontend, navigate to the `frontend` directory and run:
    ```bash
    npm start
    ```

4. To run the backend or API:
    ```bash
    python app.py
    ```

## **Usage**

- Input a **DOI** or **title** of a research paper to receive related paper recommendations.
- Explore the visualizations (t-SNE plots and similarity matrices) to better understand the relationships between papers.

## **Future Improvements**
- Expanding similarity metrics to include additional factors (e.g., topics, keywords).
- Cross-domain paper recommendations.
- Optimizing system performance and scalability.

## **License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
