-- CreateTable
CREATE TABLE "Evento" (
    "id" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "categoria" TEXT,
    "tipo" TEXT,
    "imagemUrl" TEXT,
    "link" TEXT,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);
