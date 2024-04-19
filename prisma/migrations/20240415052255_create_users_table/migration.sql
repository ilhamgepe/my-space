-- CreateTable
CREATE TABLE "users" (
    "id" STRING NOT NULL DEFAULT gen_random_uuid(),
    "ext_id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING,
    "first_name" STRING,
    "last_name" STRING,
    "image_url" STRING,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_ext_id_key" ON "users"("ext_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
