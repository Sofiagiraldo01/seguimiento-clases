class Módulo {
    constructor(nombre) {
      this.nombre = nombre;
      this.estudiantes = 0;
      this.docentes = 0;
      this.transferidos = 0;
    }
  
    asistir(segmento) {
      if (segmento === 'estudiante') {
        this.estudiantes++;
      } else if (segmento === 'docente') {
        this.docentes++;
      }
      this.transferidos++;
    }
  }
  
  class EstadísticasUniversidad {
    constructor() {
      this.terminal = new Módulo('terminal');
      this.oficina = new Módulo('oficina');
      this.totalAsistidos = 0;
      this.totalTransferidos = 0;
    }
  
    asistir(módulo, segmento) {
      if (módulo === 'terminal') {
        this.terminal.asistir(segmento);
      } else if (módulo === 'oficina') {
        this.oficina.asistir(segmento);
      }
      this.totalAsistidos++;
      this.totalTransferidos++;
    }
  
    transferir(módulo) {
      if (módulo === 'terminal') {
        this.terminal.transferidos++;
      } else if (módulo === 'oficina') {
        this.oficina.transferidos++;
      }
    }
  
    imprimirEstadísticas() {
      console.log(`Total de asistidos: ${this.totalAsistidos}`);
      console.log(`Total de transferidos: ${this.totalTransferidos}`);
      console.log(`Terminal: ${this.terminal.estudiantes} estudiantes, ${this.terminal.docentes} docentes, ${this.terminal.transferidos} transferidos`);
      console.log(`Oficina: ${this.oficina.estudiantes} estudiantes, ${this.oficina.docentes} docentes, ${this.oficina.transferidos} transferidos`);
    }
  }
  
  // Prompt para interactuar con el usuario
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const uniStats = new EstadísticasUniversidad();
  
  function promptUser() {
    readline.question('Ingrese módulo (terminal/oficina): ', módulo => {
      readline.question('Ingrese segmento (estudiante/docente): ', segmento => {
        uniStats.asistir(módulo, segmento);
        readline.question('¿Transferir a otro módulo? (si/no): ', transferir => {
          if (transferir === 'si') {
            uniStats.transferir(módulo);
          }
          uniStats.imprimirEstadísticas();
          promptUser();
        });
      });
    });
  }
  
  promptUser();
