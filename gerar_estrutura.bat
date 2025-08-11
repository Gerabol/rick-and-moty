@echo off
REM Script para criar estrutura de pastas e arquivos no projeto Rick and Morty

REM Criação das pastas
mkdir src
mkdir src\componentes
mkdir src\paginas
mkdir src\servicos
mkdir src\tipos

REM Arquivos componentes
echo // Componente Cabecalho > src\componentes\Cabecalho.tsx
echo // Componente CardPersonagem > src\componentes\CardPersonagem.tsx
echo // Componente CardEpisodio > src\componentes\CardEpisodio.tsx

REM Arquivos páginas
echo // Página Inicio > src\paginas\Inicio.tsx
echo // Página Personagens > src\paginas\Personagens.tsx
echo // Página PersonagemDetalhes > src\paginas\PersonagemDetalhes.tsx
echo // Página Episodios > src\paginas\Episodios.tsx
echo // Página EpisodioDetalhes > src\paginas\EpisodioDetalhes.tsx

REM Serviço API
echo // Serviço API > src\servicos\api.ts

REM Tipos
echo // Tipo Personagem > src\tipos\personagem.ts
echo // Tipo Episodio > src\tipos\episodio.ts

REM Arquivos principais
echo // App principal > src\App.tsx
echo // main principal > src\main.tsx

echo Estrutura criada com sucesso!
pause
