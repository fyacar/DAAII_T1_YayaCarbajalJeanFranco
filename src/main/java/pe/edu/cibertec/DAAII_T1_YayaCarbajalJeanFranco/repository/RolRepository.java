package pe.edu.cibertec.DAAII_T1_YayaCarbajalJeanFranco.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.cibertec.DAAII_T1_YayaCarbajalJeanFranco.model.bd.Rol;

@Repository
public interface RolRepository extends JpaRepository<Rol,Integer> {

    Rol findByNomrol(String nomrol);
}
