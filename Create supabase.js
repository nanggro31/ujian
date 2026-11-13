
// ==========================================
// KONFIGURASI KONEKSI SUPABASE
// Aplikasi Ujian Online SMA - V2
// ==========================================

const SUPABASE_URL = 'https://hdcsgnvrljsntrttqoqr.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_vhJ4PTHFK-oJntlBMprinA_gs_fhAGt';

// Membuat koneksi Supabase
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// Membuat akses global untuk aplikasi
window.supabaseClient = supabaseClient;

console.log('Koneksi Supabase berhasil diinisialisasi.');
