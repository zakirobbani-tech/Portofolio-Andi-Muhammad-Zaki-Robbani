const DATA = {
  name: "Andi Muhammad Zaki Robbani",
  nick: "Zaki",
  photo: "zaki",
  roles: ["Project Manager","2D & 3D Game Artist","Illustrator","Animator","Video Editor","Ketua Komunitas MAGER"],
  bio: "Saya adalah seorang Project Manager, 2D & 3D Game Artist, Illustrator, dan Animator yang berpengalaman menangani project kreatif dan teknologi, termasuk project VR Kasir. Saya juga aktif membangun komunitas sebagai Ketua MAGER (Makassar Game Developer).",
  bio2: "Melalui pengalaman sebagai Project Manager dan kreator visual, saya terbiasa mengelola project, berkolaborasi dalam tim, mengembangkan solusi kreatif, serta berkontribusi dalam komunitas untuk menghasilkan karya dan project yang berdampak.",
  stats: [[1,"Project VR"],[4,"Pengalaman Organisasi & Kerja"],[1,"Juara 1 Kompetisi"],[5,"Software Dikuasai"]],
  education: { school:"Universitas Dipa Makassar", major:"Rekayasa Perangkat Lunak", year:"2022 – 2026", logo:"l_dipa" },
  achievements: [{ icon:"🏆", title:"Juara 1 — Kategori Aplikasi Game Mobile", place:"DipaInnovationFest Competition", date:"Mei 2025", img:"trophy" }],
  skills: ["Illustrator","3D Modeling","Video Editor","2D Art","Project Manager (PM)","Public Speaking"],
  tools: [],
  experience: [
    { date:"Apr 2026 – Mei 2026", title:"Video Editor", place:"Musti Musik", logo:"l_musti", desc:"Mengedit konten YouTube & TikTok permainan piano." },
    { date:"Jul 2025 – Okt 2025", title:"Anggota Divisi Publikasi & Dokumentasi", place:"PMM (Pemberdayaan Masyarakat oleh Mahasiswa)", logo:"l_pmm", desc:"" },
    { date:"Sekarang", title:"Ketua Komunitas", place:"MAGER (Makassar Game Developer)", logo:"l_mager", desc:"Memimpin komunitas, mengoordinasikan kegiatan, serta mendorong kolaborasi dan pengembangan ekosistem game developer." },
    { date:"Project Experience", title:"Project Manager", place:"Ave Ludum Studio", logo:"l_ave_ludum", desc:"Mengelola project VR Kasir di Ave Ludum Studio, mulai dari koordinasi tim, pembagian tugas, pemantauan progres, hingga memastikan kebutuhan project berjalan sesuai target." },
    { date:"Agu 2024 – Nov 2024", title:"2D & 3D Artist & Illustrator (Internship)", place:"PT. MSV Studio Yogyakarta", logo:"l_msv", desc:"" }],
  projects: [ // cat = kategori filter (bebas, otomatis dibuat)
    { cat:"Animasi", icon:"🦋", img:"", gallery:["a1","a2"], title:"2D Animator", tools:"Animasi 2D", desc:"Pengembangan dan penganimasian elemen visual dinamis: karakter hewan serta efek alami seperti air, asap, dan api, dengan prinsip animasi yang tepat untuk gerakan halus dan realistis." },
    { cat:"Animasi", icon:"🐰", img:"", gallery:["b1","b2","b3"], title:"3D Animator", tools:"Maya · Rigging", desc:"Animasi karakter 3D mencakup facial expression, walking cycle, dan bouncing ball menggunakan rigging serta prinsip timing, spacing, dan weight." },
    { cat:"Video", icon:"🎹", img:"", gallery:["v0","v1","v2","v3"], title:"Video Editor — Musti Musik", tools:"CapCut", desc:"Editing konten YouTube dan TikTok bertema piano: penyusunan visual, sinkronisasi audio, dan elemen pendukung yang memperhatikan ritme musik dan estetika visual." },
    { cat:"Game", icon:"🫧", img:"", gallery:["g1","g2"], title:"Bubble Maze (Skripsi)", tools:"Game 3D · UI · Environment", desc:"Game 3D edukasi matematika untuk Sekolah Dasar bertema underwater. Kontribusi: visual environment, desain UI, dan animasi interaktif untuk pengalaman belajar yang menarik dan imersif." },
    { cat:"Project Management", icon:"🥽", img:"vr_kasir", gallery:["vr_kasir"], title:"VR Kasir", tools:"Project Management · VR", desc:"Project VR Kasir yang saya handle sebagai Project Manager, dengan fokus pada koordinasi tim, pembagian tugas, pemantauan progres, dan pengelolaan kebutuhan project dari proses pengembangan hingga penyelesaian." }],
  contact: [ ["📞","Telepon / WhatsApp","0895360896290","tel:0895360896290"], ["✉️","Email","zakirobbani2809@gmail.com","mailto:zakirobbani2809@gmail.com"], ["📸","Instagram","@_zkiii","https://instagram.com/_zkiii"], ["💼","LinkedIn","Andi Muhammad Zaki Robbani","https://www.linkedin.com/in/andi-muhammad-zaki-robbani-963954347/"] ]
};
/* ---- Redesign additions (konten lama di atas tidak diubah) ---- */
DATA.identity="Game Developer | Frontend Developer | Logo Designer | Content Creator";
DATA.heroRoles=["Game Developer","Frontend Developer","Logo Designer","Content Creator",...DATA.roles];
DATA.tools=[["Adobe Illustrator","t_ai"],["Adobe Photoshop",""],["Figma",""],["CapCut","t_cc"],["Unity",""],["Blender","t_bl"],["Maya","t_maya"],["After Effects","t_ae"]];
DATA.projects.unshift({cat:"Game",featured:true,icon:"🏮",img:"last_lantern",gallery:["last_lantern"],title:"Last Lantern",tools:"Unity · Windows PC",
 meta:["Ave Ludum Studio","Scream Jam 2026","3D Horror / Adventure","Unity","Windows PC"],
 link:"https://thelegokid4455.itch.io/last-lantern",
 desc:"Last Lantern is a short atmospheric horror game developed by Ave Ludum Studio for Scream Jam 2026. Players take the role of a lighthouse technician assigned to repair a broken lighthouse. Collect fuses to restore the generator, gather oil to keep the lantern running, and survive the wandering ghost of the past.",
 features:["First-person horror experience","Lighthouse exploration","Generator repair mechanics","Fuse collection","Lantern oil management","Atmospheric horror environment","Monster avoidance and survival"]});

const IMG_EXT={"last_lantern":"jpg","vr_kasir": "jpg", "trophy": "jpg", "l_dipa": "jpg", "l_msv": "jpg", "l_mager": "jpg", "l_pmm": "jpg", "l_musti": "jpg", "t_ai": "jpg", "t_ae": "jpg", "t_bl": "jpg", "t_maya": "jpg", "t_cc": "jpg", "a1": "jpg", "a2": "jpg", "b1": "jpg", "b2": "jpg", "b3": "jpg", "v0": "jpg", "v1": "jpg", "v2": "jpg", "v3": "jpg", "g1": "jpg", "g2": "jpg", "zaki": "jpg", "l_ave_ludum": "png"};
