import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDatabase() {
  // Crear usuarios
  const user1 = await prisma.user.create({
    data: {
      name: "Usuario Ejemplo",
      email: "usuario@example.com",
    },
  });

  // Crear restaurantes
  const restaurant1 = await prisma.restaurant.create({
    data: {
      name: "Restaurante 1",
      direcction: "Dirección del Restaurante 1",
    },
  });

  // Crear productos
  const product1 = await prisma.product.create({
    data: {
      title: "Producto 1",
      description: "Descripción del Producto 1",
      conditions: "Condiciones del Producto 1",
      img_main: "imagen1.jpg",
      video: "video1.mp4",
      menu: "menu1.pdf",
      n_pax: 2,
      price: 19.99,
      restaurant: { connect: { id: restaurant1.id } },
    },
  });

  // Crear carrito y items en el carrito
  const cart = await prisma.cart.create({
    data: {
      user: { connect: { id: user1.id } },
      cartItems: {
        create: [{ product: { connect: { id: product1.id } }, quantity: 2 }],
      },
    },
  });

  // Crear compra y items en la compra
  const purchase = await prisma.purchase.create({
    data: {
      user: { connect: { id: user1.id } },
      totalAmount: 39.98,
      cart: { connect: { id: cart.id } },
    },
  });

  console.log("Datos de ejemplo creados exitosamente.");
}

seedDatabase()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
