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
  contact: [ ["📞","Telepon / WhatsApp","0895360896290","tel:0895360896290"], ["✉️","Email","zakirobbani2809@gmail.com","mailto:zakirobbani2809@gmail.com"], ["📸","Instagram","@zr.gamedev","https://instagram.com/zr.gamedev"], ["💼","LinkedIn","Andi Muhammad Zaki Robbani","https://www.linkedin.com/in/andi-muhammad-zaki-robbani-963954347/"] ]
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

/* ---- ZR / FIELD NOTES positioning ---- */
DATA.identity="Game Producer | Game Development Project Manager | Production Planning & Art Coordination";
DATA.heroRoles=["Game Producer","Game Development Project Manager","Production Planning & Art Coordination"];
DATA.tagline="MAKING GAMES. DOCUMENTING THE PROCESS.";
DATA.bio="I help turn creative game ideas into structured production through planning, documentation, team coordination, and clear delivery workflows. Based in Makassar, Indonesia. Building game projects, documenting production, and growing my 3D art practice.";
DATA.bio2="Saya menyusun scope, timeline, dan dokumentasi, lalu mengoordinasikan programmer dan artist sampai output siap dikirim. MAGER (Makassar Game Developer) adalah pengalaman kepemimpinan komunitas yang mendukung, bukan identitas utama portfolio ini.";
DATA.roles=["Game Producer","Game Development Project Manager"];
DATA.stats=[[5,"Pengalaman kerja & organisasi"],[1,"Juara 1 Kompetisi"],[4,"Case notes"]];
DATA.skills=["GDD","Scope & Features","Timeline & Milestones","RAB & Proposal","Task Allocation","Progress Reporting","Art-Output Evaluation","Revision & Change Management","Client Communication","Presentation & Pitching","Public Speaking","Unity","Blender (learning)","Maya","Illustrator","CapCut"];
DATA.skillGroups=[["Production",["GDD","Scope & Features","Timeline & Milestones","RAB & Proposal","Task Allocation","Progress Reporting","Revision & Change Management"]],["Communication",["Client Communication","Presentation & Pitching","Public Speaking","Art-Output Evaluation"]],["Game Development & Creative Tools",["Unity","Blender (learning)","Maya","Illustrator","CapCut"]]];
DATA.capabilities=[["Game Production","Deliverables: GDD, scope & feature list, production plan.","Menyusun dan merawat GDD serta menentukan scope/fitur project."],["Project Planning","Deliverables: timeline & milestones, RAB/proposal, change log.","Rencana kerja, anggaran, dan pengelolaan revisi / change request."],["Team & Art Coordination","Deliverables: task allocation, art-output evaluation.","Membagi tugas ke programmer & artist, memantau progres, mengevaluasi hasil art."],["Documentation & Stakeholder Communication","Deliverables: progress reports, presentations, client updates.","Laporan progres, presentasi, dan komunikasi dengan klien / stakeholder."]];
DATA.cases=[
{t:"VR Kasir",ctx:"Project VR di Ave Ludum Studio.",st:"Status detail: to confirm",role:"Project Manager",act:"Koordinasi tim, pembagian tugas, pemantauan progres, pengelolaan kebutuhan project.",ev:"Screenshot project (lihat Archive).",out:"to confirm — hasil akhir belum diverifikasi.",ls:"to confirm",cr:"Ave Ludum Studio"},
{t:"THE LEGEND OF TOAKALA",ctx:"Game petualangan/puzzle 3D Android bertema budaya & edukasi.",st:"In development. Info terakhir yang diketahui: Level 1 & 2 selesai, Level 3 dikembangkan. Belum dirilis. [to confirm: status terkini]",role:"to confirm",act:"to confirm — peran individu menunggu konfirmasi.",ev:"to confirm (GDD / build / progress report)",out:"Belum selesai / belum diluncurkan.",ls:"to confirm",cr:"Ave Ludum Studio (to confirm)"},
{t:"Pilah Bumi – Pulau Sanane",ctx:"Game Android Unity 3D, eksplorasi & pemilahan sampah orang pertama.",st:"to confirm",role:"to confirm",act:"Deskripsi dibuat berfokus pada project sampai bukti kontribusi tersedia.",ev:"to confirm",out:"to confirm",ls:"to confirm",cr:"to confirm"},
{t:"Last Lantern",ctx:"Game horor 3D orang pertama bergaya stylized untuk Scream Jam 2026, dibuat oleh Ave Ludum Studio (konteks tim).",st:"Game jam entry; tersedia di itch.io.",role:"Kontribusi individu: to confirm",act:"to confirm — dipisahkan dari kerja tim studio.",ev:"Halaman itch.io & screenshot (lihat Archive).",out:"Game jam submission.",ls:"to confirm",cr:"Ave Ludum Studio"}];
DATA.lab="Blender adalah jalur belajar & pembangunan portfolio yang sedang berjalan, bukan klaim keahlian tingkat ahli.";
DATA.experience=[DATA.experience[3],DATA.experience[4],DATA.experience[0],DATA.experience[2],DATA.experience[1]];
DATA.experience[0].desc="Koordinasi timeline, RAB/proposal, pembagian tugas ke programmer & artist, pemantauan progres, komunikasi dengan klien/stakeholder, evaluasi hasil art, scope/fitur, revisi/change request, laporan & presentasi, serta kerja dengan GDD.";
DATA.experience[2].title="Video Editor";
const IMG_EXT={"last_lantern":"jpg","vr_kasir": "jpg", "trophy": "jpg", "l_dipa": "jpg", "l_msv": "jpg", "l_mager": "jpg", "l_pmm": "jpg", "l_musti": "jpg", "t_ai": "jpg", "t_ae": "jpg", "t_bl": "jpg", "t_maya": "jpg", "t_cc": "jpg", "a1": "jpg", "a2": "jpg", "b1": "jpg", "b2": "jpg", "b3": "jpg", "v0": "jpg", "v1": "jpg", "v2": "jpg", "v3": "jpg", "g1": "jpg", "g2": "jpg", "zaki": "jpg", "l_ave_ludum": "png"};
