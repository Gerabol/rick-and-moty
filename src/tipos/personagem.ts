export interface Personagem {
  id: number;
  nome: string;
  status: string;
  especie: string;
  tipo: string;
  genero: string;
  origem: {
    nome: string;
    url: string;
  };
  localizacao: {
    nome: string;
    url: string;
  };
  imagem: string;
  episodios: string[]; 
}
