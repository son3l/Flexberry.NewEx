package NewEx.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import NewEx.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: OptFiles
 */
@Entity(name = "IISNewExOptFiles")
@Table(schema = "public", name = "OptFiles")
public class OptFiles {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Repository")
    private String repository;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DownloadFile")
    @Convert("DownloadFile")
    @Column(name = "DownloadFile", length = 16, unique = true, nullable = false)
    private UUID _downloadfileid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DownloadFile", insertable = false, updatable = false)
    private DownloadFile downloadfile;


    public OptFiles() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getRepository() {
      return repository;
    }

    public void setRepository(String repository) {
      this.repository = repository;
    }


}